# StayEase User Management Service

A production-ready Node.js/Express backend for StayEase, focused on secure admin user management. Runs with Docker, supports cloud MongoDB, and integrates with an external Auth Service for JWT-based admin authentication.

## Features
- Admin-only REST API for user management
- JWT authentication via external Auth Service
- Cloud MongoDB support (Atlas or similar)
- Docker & Docker Compose ready
- Swagger API documentation

## Prerequisites
- Node.js 20+
- Docker & Docker Compose
- Cloud MongoDB URI (e.g., MongoDB Atlas)
- External Auth Service running and accessible

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/stayease-sliit-2026/stayease-user-management.git
cd stayease-user-management
```

### 2. Configure Environment Variables
Create a `.env` file based on `.env.example` and set:
- `MONGO_URI` to your cloud MongoDB connection string
- `AUTH_SERVICE_URL` to your Auth Service endpoint (e.g., `http://host.docker.internal:8080/auth/auth/verify`)

### 3. Build & Run with Docker Compose
```sh
docker-compose up --build -d
```
The backend will be available at `http://localhost:3005` (or your mapped port).

### 4. API Documentation
Swagger UI is available at `/api-docs` (e.g., `http://localhost:3005/api-docs`).

## API Endpoints
- All endpoints require a valid admin JWT in the `Authorization` header.
- See Swagger docs for details.

## Development
- To run locally without Docker:
	1. Install dependencies: `npm install`
	2. Start server: `npm start`

## Troubleshooting
- **Auth Service not reachable in Docker?** Use `host.docker.internal` in your URLs.
- **MongoDB connection issues?** Ensure your cloud MongoDB URI is correct and accessible from Docker.
- **Port conflicts?** Change the mapped port in `docker-compose.yml`.

## License
MIT

---
For questions or support, contact the StayEase team.
