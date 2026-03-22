const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin.routes');
const { logInfo, logError } = require('./utils/logger');

// Swagger UI setup
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// Input validation middleware (example for JSON body)
function validateJsonContent(req, res, next) {
	if (req.is('application/json') && !req.body) {
		return res.status(400).json({ message: 'Invalid JSON body' });
	}
	next();
}

// Centralized error handler
function errorHandler(err, req, res, next) {
	logError(err);
	res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(validateJsonContent);

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes

app.use('/api/users', adminRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Error handler (should be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
	app.listen(PORT, () => logInfo(`Server running on port ${PORT}`));
}).catch((err) => {
	logError('Failed to connect to DB:', err);
	process.exit(1);
});
