const express = require('express');

const app = express();

app.get('/test1', (req, res) => {
  res.json({ message: "We got a response back from the Express server!" });
});

app.get('/test2', (req, res) => {
  res.json({ message: "I see you found the second test endpoint. Welcome!" });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);