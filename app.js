const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


// Serve static files from a "public" directory
app.use(express.static('public')); 

app.get('/', (req, res) => {
	res.send('Hello World!');
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

mongoose.connect('mongodb://mongo:27017/mydatabase', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Connect to MongoDB');
}).catch(err => {
	console.error("MongoDB connection error:', err);
});

