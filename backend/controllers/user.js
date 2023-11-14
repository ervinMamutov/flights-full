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
  login: async (req, res) => {},
  logout: async (req, res) => {}
};

export default userControllers;
