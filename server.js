const express = require('express');

const app = express();

app.get('/test1', (req, res) => {
  res.json({ message: "We got a response back from the Express server!" });
});

app.get('/test2', (req, res) => {
  res.json({ message: "I see you found the second test endpoint. Welcome!" });
});

app.get('/test3', (req, res) => {
  res.json({ message: "Fear my power of adding a new button to the project!" });
});

app.get('/test4', (req, res) => {
  res.json({ message: "This is not a test of the Cal Poly Pomona Alert System" });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);