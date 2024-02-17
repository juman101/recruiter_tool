

import { User } from '../models/pgsql.js';
import { hashPassword, comparePassword} from "../utils/auth.js";
import jwt from 'jsonwebtoken';
import AWS from 'aws-sdk';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";



///aws


const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};


const SES =new AWS.SES(awsConfig);



export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be at least 6 characters long");
    }

    // Check if the email is already taken
    const userExist = await User.findOne({ where: { email } });

    if (userExist) return res.status(400).send("Email is taken");

    // Hash password (You need to implement your hashPassword function)
    const hashedPassword = await hashPassword(password);

    // Register user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error. Try again.");
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if our database has a user with that email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send("No user found");
    }

    // Check password
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(400).send("Wrong password");
    }

    // Create signed JWT
    const token = jwt.sign({ _id: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Exclude hashed password from user object
    user.password = undefined;

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });

    // Send user as a JSON response
    res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const userId = parseInt(req.auth._id, 10); // Convert the ID to an integer
    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id: userId },
    });
    

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log("CURRENT_USER", user);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const sendTestEmail = async (req, res) => {
  const params = {
    Source: 'siddhantgoyal.iitg@gmail.com',  
    Destination: {
      ToAddresses: ['sidiitguwahati@gmail.com']
    },
    ReplyToAddresses: ['siddhantgoyal.iitg@gmail.com'],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <html>
              <h1>Reset password link</h1>
              <p>Please use the following link to reset your password</p>
            </html>
          `,
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Password reset link',
      },
    },
  };

  try {
    const emailSent = await SES.sendEmail(params).promise();
    console.log(emailSent);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
};



export const forgotpassword =async(req,res)=>
{

  try{
    const {email}=req.body;
const shortCode =nanoid(6).toUpperCase();
const user =await User.findOneAndUpdate({email},{passwordResetCode:shortCode})
if(!user)
return res.status(400).send("user not found");


const params = {
  Source: 'siddhantgoyal.iitg@gmail.com',  
  Destination: {
    ToAddresses: [email]
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: `
          <html>
            <h1>Reset password link</h1>
            <p>Please use the following link to reset your password</p>
            <h2>${shortCode}</h2>
          </html>
        `,
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Password reset link',
    },
  },
};


const emailSent=SES.sendEmail(params).promise();

emailSent
.then((data)=>{
console.log(data);
res.json({ok:true})
})

.catch((err)=>
{
console.log(err);
}
);
  
}

  catch(err)
{
console.log(err);
}




};



export const resetpassword = async (req, res) => {
  try {
    const { email, code, newpassword } = req.body;

    // Hash the new password

    const hashedPassword = await hashPassword(newpassword);

    // Find the user by email and passwordResetCode and update the password

    const [updatedRows] = await User.update(
      {
        password: hashedPassword,
        passwordResetCode: "",
      },
      {
        where: {
          email,
          passwordResetCode: code,
        },
      }
    );

    // Check if the user was found and updated

    if (updatedRows === 0) {
      return res.status(400).send("Invalid email or code");
    }

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error. Try again.");
  }
};