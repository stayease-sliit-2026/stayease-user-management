
const axios = require('axios');
const User = require('../models/user.model');

exports.createUser = async (data) => {
  // Register user in external Auth Service first
  try {
    console.log('Registering user with Auth Service:', data);
    const authRes = await axios.post(process.env.AUTH_SERVICE_REGISTER, {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password
    });
    console.log('Auth Service registration response:', authRes.data);
    if (!authRes.data.message) {
        console.error('Auth Service registration failed:', authRes.data);
      throw new Error('Auth Service registration failed');
    }
  } catch (err) {
    throw new Error('Auth Service registration failed: ' + (err.response?.data?.message || err.message));
  }
  // Save user locally
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
