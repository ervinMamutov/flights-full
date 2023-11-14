import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
  register: async (req, res) => {
    try {
      const { email, password, rePassword } = req.body;
      const userExist = await User.findOne({ email });

      if (userExist) {
        return res.status(400).json({
          success: false,
          message: 'User already exist'
        });
      } else {
        if (
          !validateEmail(email) ||
          !validatePassword(password) ||
          !matchPasswords(password, rePassword)
        ) {
          return res.status(400).json({
            success: false,
            message: 'Please fill in the fields correctly'
          });
        } else {
          const hashedPassword = hashPassword(password);

          const user = User.create({
            email,
            password: hashedPassword
          });
          res.status(201).json({
            success: true,
            message: `The user named ${email} was successfully created`
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        const isValid = await bcrypt.compare(password, userExist.password);

        if (isValid) {
          const token = jwt.sign(
            { userExist: userExist },
            process.env.TOKEN_ACCESS_SECRET
          );

          res.cookie('_id', userExist._id, {
            secure: true,
            sameSite: false
          });

          res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: false
          });
          res.status(200).json({
            success: true,
            token,
            id: userExist._id
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message
      });
    }
  },
  logout: (req, res) => {
    res.clearCookie('token');
    res.clearCookie('id');

    return res.status(200).json({
      success: true,
      message: `User session closed successfully`
    });
  }
};

export default userControllers;
