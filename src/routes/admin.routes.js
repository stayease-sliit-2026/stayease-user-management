const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth.middleware');
const { validateObjectId } = require('../middleware/validateObjectId.middleware');
const adminController = require('../controllers/admin.controller');

// Create user (admin)
router.post('/admin/all', adminAuth, adminController.createUser);
// Get all users
router.get('/admin/all', adminAuth, adminController.getAllUsers);

// Get one user by ID
router.get('/admin/:id', adminAuth, validateObjectId, adminController.getUserById);

// Update user
router.put('/admin/:id', adminAuth, validateObjectId, adminController.updateUser);

// Delete user
router.delete('/admin/:id', adminAuth, validateObjectId, adminController.deleteUser);

module.exports = router;
