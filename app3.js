// This is app3.js, the dice roller with an HTML interface
const express = require('express');
const app = express();
const path = require('path');
const { rollTheDice } = require('./dice.js');


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file at the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Backend route to handle dice rolls
app.get('/rollthedice', (req, res) => {
    // Respond with the array of dice rolls
    const numDice = parseInt(req.query.rolls) || 1; // Get the number of dice from query or default to 1
    res.json(rollTheDice(numDice, 1, 6));
});

// Start the server
const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
