import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken';

const { sign } = pkg;

const maxAge = 3* 24 * 60 * 60 * 100 ; 

const createToken = (email, userId) => {
  return sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const register = async (req, res, next) => {
  try {
    // Destructure email and password from req.body
    const { username , email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // Create a new user
    const user = await User.create({ username ,email, password });

    // Create a JWT token and set the cookie
    res.cookie("jwt", createToken(email, user.id), {
      maxAge,
      secure: true,
      sameSite: "None",
    });

    // Return the user details in the response
    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};



export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and Password are required.");
    }

    // Correct the User model reference here
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User with the given email is not found.");
    }

    const auth = await compare(password, user.password);
    if (!auth) {
      return res.status(400).send("Password is incorrect.");
    }

    // Correct the 'res' object usage
    res.cookie("jwt", createToken(email, user._id), {
      maxAge,
      secure: true,
      sameSite: "None",
    });

    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        username:user.username
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};


export const getUserInfo = async (req, res) => {
  try {
    console.log("Request received with userID:", req.userID);  

    const userData = await User.findById(req.userID); 
    if (!userData) {
      return res.status(404).send("User with this ID not found");
    }

    return res.status(200).json({
      id: userData._id,
      email: userData.email,
      username:userData.username
    });
  } catch (error) {
    console.error("Error fetching user info:", error);
    return res.status(500).send("Internal server error");
  }
};

