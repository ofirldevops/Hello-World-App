const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection string from environment variable or default
const mongoURL = process.env.MONGO_URL || mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
        console.log('Connected to MongoDB');
}).catch(err => {
        console.error("MongoDB connection error:', err);


// // Serve static files from a "public" directory
//app.use(express.static('public')); 

// Simple route using Express
app.get('/', (req, res) => {
	res.send('Hello World with Express and MongoDB!');
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

// JSON API endpoint
app.get('/api/data', (req, res) {
	res.json({ message: 'This is some data' });
});


app.listen(port, () => {
	console.log('Server listening on port ${port}');
});


