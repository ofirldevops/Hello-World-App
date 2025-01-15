const express = require('express');
const app = express();
const port = 3000;

//serve static files from a "public" directory
app.use(express.static('public'));

app.get('/', (req,res) => {
	res.send('Hello World!');
});

app.get('/about', (req,res) => {
	res.send('About Page');
});

//JSON API endpoint
app.get('/api/data', (req, res) {
	res.json({ message: 'This is some data' });
});


app.listen(port, () => {
	console.log('Server listening on port ${port}');
});
