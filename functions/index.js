const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const serviceAccount = require("../permission.json");

app.use(cors({ origin: true }));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dog-finder-fae9d.firebaseio.com"
});

// Firebase DB
const db = admin.firestore();

// Application/Json parser
var jsonParser = bodyParser.json()

// Application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Endpoints
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

app.get('/test5', (req, res) => {
  res.json({ message: "Please help, still cannot see text when button is pressed. Signed Justin." });
});

app.post('/api/create', jsonParser, (req, res) => {
    (async () => {
        const collectionName = `items`;
        const docName = `/${req.body.id}/`;
        const dataObj = {
            id: req.body.id,
            item: req.body.item,
            value: req.body.value
        }
        try {
          await db.collection(collectionName).doc(docName)
              .create(dataObj);
          return res.status(200).json({
              success: true,
              dataObj
          });
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
exports.app = functions.https.onRequest(app);