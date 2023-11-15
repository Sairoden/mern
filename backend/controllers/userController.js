// Libraries
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

// Middlewares
const { HttpError } = require("../middlewares");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Sairoden Gandarosa",
    email: "sai@gmail.com",
    password: "Sairoden12",
  },
];

const getAllUsers = async (req, res, next) => {
  return res
    .status(200)
    .send({ users: DUMMY_USERS, count: DUMMY_USERS.length });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );

    return next(error);
  }

  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(user => user.email === email);

  if (hasUser) {
    const error = new HttpError("Email alreay exists", 422);
    return next(error);
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  return res.status(201).send({ user: createdUser });
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
