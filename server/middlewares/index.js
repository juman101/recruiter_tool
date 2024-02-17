import { User, Image, sequelize } from '../models/pgsql.js';
import { expressjwt} from "express-jwt";
const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});

export const isInstructor = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.auth._id,
      }
    });

    if (!user) {
      return res.sendStatus(403); // User is not an instructor, forbidden
    }

    next(); // User is an instructor, proceed to the next middleware or route handler
  } catch (err) {
    console.error(err);
    res.sendStatus(500); // Internal Server Error
  }
};