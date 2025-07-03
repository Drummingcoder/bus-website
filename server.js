// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const path = require('path');


// Serve all static files (including images, CSS, JS) from the project root
app.use(express.static(__dirname));

// Serve index.html from root (keep this for / route)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, numpeople, routenumber, time } = req.body;
    const data = `Name: ${name}, Number of People: ${numpeople}, Route Number: ${routenumber}, Time: ${time}\n`;

    // Append the form data to the "database.db" file
    fs.appendFile('database.db', data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Form submitted successfully! Have a great day!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});