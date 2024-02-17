import { User, Image } from '../models/pgsql.js';
import dotenv from 'dotenv';


dotenv.config();





export const currentCreator = async (req, res) => {
  try {
    const userId = req.auth._id;

    // Find the user by ID, exclude the password field
    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log("good here");
    res.json({ ok: true });
  } catch (err) {
    console.error("woah error was here");
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const creatorImages = async (req, res) => {
  try {
    const userId = req.auth._id;

    // Find images associated with the creator ID

    const images = await Image.findAll({
        where: { UserId: userId },
        order: [['createdAt', 'DESC']],
      });

    res.json(images);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

