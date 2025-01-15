# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# COPY package files and install depenencies
COPY package*.json ./

# Configure npm to skip strict SSL verification (if needed)
RUN npm config set strict-ssl false

# Install dependencies
RUN npm install

# Bundle app source code - Copy the rest of your application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]





