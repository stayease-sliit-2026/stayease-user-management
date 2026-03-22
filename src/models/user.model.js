// user model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userId: { type: String },
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: { type: String },
	address: { type: String },
	avatarUrl: { type: String },
	role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
// user model 
