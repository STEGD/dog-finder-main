const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const serviceAccount = require("./permission.json");

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
app.post('/api/create', jsonParser, (req, res) => {
    (async () => {
        const collectionName = `items`;
        const docName = `/${req.body.data.id}/`;
        const dataObj = {
            id: req.body.data.id,
            item: req.body.data.item,
            value: req.body.data.value
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

app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: "You found the test endpoint!"
  })
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
exports.app = functions.https.onRequest(app);