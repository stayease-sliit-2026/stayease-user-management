const User = require('../models/user.model');

exports.createUser = async (data) => {
  // Optionally hash password here if needed
  const user = new User(data);
  return await user.save();
};

exports.findAllUsers = async () => {
  return await User.find();
};

exports.findUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
