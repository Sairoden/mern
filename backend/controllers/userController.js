// LIBRARIES
const { validationResult } = require("express-validator");

// MIDDLEWARES
const { HttpError } = require("../middlewares");

// MODELS
const { userModel } = require("../models");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.find();

    if (!users) {
      const error = new HttpError("No users at the moment.", 400);

      return next(error);
    }

    return res.status(200).send({ users, count: users.length });
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new HttpError(
        "Invalid inputs passed, please check your data",
        422
      );

      return next(error);
    }

    const { name, email, password, places } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      const error = new HttpError("Email alreay exists", 422);
      return next(error);
    }

    const newUser = await userModel.create({
      name,
      email,
      password,
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      password,
      places,
    });

    if (!newUser) {
      const error = new HttpError("Signing up failed, please try again.", 500);

      return next(error);
    }

    return res.status(201).send({ user: newUser });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = DUMMY_USERS.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    const error = new HttpError("Invalid credentials", 401);
    return next(error);
  }

  return res.status(200).send({ message: "Logged in" });
};

module.exports = {
  getAllUsers,
  signup,
  login,
};
