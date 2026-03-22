const axios = require('axios');

module.exports = async function adminAuth(req, res, next) {
  try {
    console.log('Admin auth middleware invoked resquest headers:', req.headers);
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ success: false, message: 'No token provided' });
    const response = await axios.get('http://host.docker.internal:8080/auth/auth/verify', {
      headers: { Authorization: authHeader }
    });
    console.log('Auth service response:', response.data);
    const user = response.data.user;
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden: Admins only' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error('Admin auth error:', err.response ? err.response.data : err.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
