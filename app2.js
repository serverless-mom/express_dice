/*app.js*/
const express = require('express');
const { rollTheDice } = require('./dice2.js');

const PORT = parseInt(process.env.PORT || '8089');
const app = express();

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


app.get('/rolldice', (req, res) => {
  const rolls = req.query.rolls ? parseInt(req.query.rolls.toString()) : NaN;
  if (isNaN(rolls)) {
    res
      .status(400)
      .send("Request parameter 'rolls' is missing or not a number.");
    return;
  }
  sleep(5000).then(() =>{
      res.send(JSON.stringify(rollTheDice(rolls, 1, 6)));
  })
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});