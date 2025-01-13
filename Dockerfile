# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# COPY package files and install depenencies
COPY package*.json ./
RUN npm install

# Bundle app source code
COPY . .

# Expose port 3000 and run the application
EXPOSE 3000
CMD [ "npm", "start" ]



