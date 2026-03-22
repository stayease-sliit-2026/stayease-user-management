const AdminUserService = require('../services/adminUser.service');
const { errorResponse, successResponse } = require('../utils/response');

exports.createUser = async (req, res) => {
  try {
    const user = await AdminUserService.createUser(req.body);
    return res.status(201).json(successResponse(user));
  } catch (err) {
    return res.status(400).json(errorResponse(err.message || 'Failed to create user'));
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    console.log('Fetching all users - Admin controller');
    const users = await AdminUserService.findAllUsers();
    console.log('Users fetched:', users);
    return res.json(successResponse(users));
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json(errorResponse('Failed to fetch users'));
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await AdminUserService.findUserById(req.params.id);
    if (!user) return res.status(404).json(errorResponse('User not found'));
    return res.json(successResponse(user));
  } catch (err) {
    return res.status(500).json(errorResponse('Failed to fetch user'));
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, phone, address, role } = req.body;
    const updated = await AdminUserService.updateUser(req.params.id, { name, phone, address, role });
    if (!updated) return res.status(404).json(errorResponse('User not found'));
    return res.json(successResponse(updated));
  } catch (err) {
    return res.status(500).json(errorResponse('Failed to update user'));
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await AdminUserService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json(errorResponse('User not found'));
    return res.json(successResponse({ message: 'User deleted' }));
  } catch (err) {
    return res.status(500).json(errorResponse('Failed to delete user'));
  }
};
