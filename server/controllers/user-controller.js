const User = require("../models/user-model");
const validateRegister = require("../validation/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (request, response) => {
  const {isValid,errors} = validateRegister(request.body.user)
  if(!isValid) return response.status(400).json({success:false,errors})
  bcrypt
    .genSalt()
    .then((salt) => {
      bcrypt
        .hash(request.body.user.password, salt)
        .then(async (hashPassword) => {
          request.body.user.password = hashPassword;
          await userModel
            .insertMany(request.body.user)
            .then(() => response.send("success"))
            .catch((err) => response.send(err));
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUsers = async (request, response) => {
  await User.find({}).then((users, error) => {
    if (error) {
      return response.status(400).json({ success: false, error });
    }
    if (users.length == 0) {
      return response.json({ success: false, message: "no users" });
    }
    response.status(200).json({ success: true, users });
  });
};

const getUserById = async (request, response) => {
  await User.findById();
};
const createUser = async (request, response) => {
  await User.insertMany(request.body.user)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "user added successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const updateUser = async (request, response) => {
  await User.findByIdAndUpdate(request.params.id, request.body.user)
    .then((result) => response.status(200).json({ success: true, result }))
    .catch((error) => response.status(400).json({ message: false, error }));
};

const deleteUser = async (request, response) => {
  await User.findByIdAndDelete(request.params.id)
    .then(() => response.status(200).json({ success: true }))
    .catch((error) => response.status(400).json({ message: false }, error));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
