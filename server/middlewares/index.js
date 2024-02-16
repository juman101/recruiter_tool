import { User, Image, sequelize } from '../models/pgsql.js';
import { expressjwt} from "express-jwt";
const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});

export const isEnrolled = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.auth._id } });
    const image = await Image.findOne({ where: { slug: req.params.slug } });

    const userImages = await user.getImages(); // Assuming you've set up associations in your models

    const ids = userImages.map(image => image.id); // Extracting ids from user's images

    if (!ids.includes(image.id)) {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500); // Internal Server Error
  }
};
