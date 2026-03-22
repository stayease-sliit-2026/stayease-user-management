# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port (change if your app uses a different port)
EXPOSE 3005

# Set environment variables (override in production as needed)
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
