# Use an official Node.js runtime as a parent image
From node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
Copy package*.json ./
RUN npm install

# Bundle app source code
COPY ..

# Expopse port and run the application
EXPOSE 3000
CMD [ "npm", "start" ]
