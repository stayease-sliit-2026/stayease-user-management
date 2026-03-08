const userService = require('../services/user.service');

exports.getProfile = async (req, res) => {
	try {
		const user = await userService.getUserById(req.user.userId);
		if (!user) return res.status(404).json({ message: 'User not found' });
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.updateProfile = async (req, res) => {
	try {
		const updated = await userService.updateUser(req.user.userId, req.body);
		if (!updated) return res.status(404).json({ message: 'User not found' });
		res.json(updated);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.deleteAccount = async (req, res) => {
	try {
		const deleted = await userService.deleteUser(req.user.userId);
		if (!deleted) return res.status(404).json({ message: 'User not found' });
		res.json({ message: 'Account deleted' });
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};
// user controller 
