const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
// const serviceAccount = require("./permission.json");

app.use(cors({ origin: true }));

admin.initializeApp({ 
  //credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dog-finder-fae9d.firebaseio.com"
});

/*
  URL Example: https://firebasestorage.googleapis.com/v0/b/dog-finder-fae9d.appspot.com/o/ballPython.jpeg?alt=media&token=d198224a-6339-4ad1-80c3-cde62f4d0299

  URL Template: https://firebasestorage.googleapis.com/v0/b/dog-finder-fae9d.appspot.com/o/[IMG URL]?alt=media&token=[ACCESS TOKEN]
*/

// Firebase DB
const db = admin.firestore();

// Application/Json parser
var jsonParser = bodyParser.json()

// Application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Endpoints
app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: "You found the test endpoint!"
  })
});

app.post('/api/submit', jsonParser, async (req, res) => {
  const { 
    petActivityLevel, 
    freeTime, 
    costPerYear, 
    firstYearCost, 
    kidsOverTen, 
    kidsUnderTen, 
    personalActivityLevel, 
    petExperience,
    allergies,
    petSize
  } = req.body.data;
  const snapshot = await db.collection('pets').where('activityLevel', '<=', petActivityLevel).get();
  const values = snapshot.docs.map(doc => doc.data());

  const filterFreeTime = values.filter(data => data.timeNeeded <= freeTime);
  const filterAnnualCost = filterFreeTime.filter(data => data.annualCost <= costPerYear);
  const filterFirstYearCost = filterAnnualCost.filter(data => data.firstYearCost <= firstYearCost);
  const filterAge = values.filter(data => {
    if (kidsUnderTen) {
      return data.youngKidOk
    } else {
      return data;
    }
  });
  const filterPersonalActivityLevel = filterAge.filter(data => data.energyNeeded <= personalActivityLevel);
  const filterPetExperience = filterPersonalActivityLevel.filter(data => data.ownerExp <= petExperience);
  const filterPetAllergies = filterPetExperience.filter(data => {
    if (allergies) {
      return data.type !== "Dog" && data.type !== "Bird" && data.type !== "Small Mammal" && data.type !== "Cat"
    } else {
      return data;
    }
  });
  const filterPetSize = filterPetAllergies.filter(data => {
    if (petSize === 3) {
      return data.size === "Tiny" || data.size === "Small" || data.size === "Medium";
    } else if (petSize === 2) {
      return data.size === "Tiny" || data.size === "Small";
    } else if (petSize === 1) {
      return data.size === "Tiny";
    } else {
      return data;
    }
  })

  return res.status(200).json({ success: true, dataLength: filterPetSize.length, value: filterPetSize })
})

app.post('/api/filterPets', jsonParser, async (req, res) => {
  const {
    petType,
    petSize
  } = req.body.data;

  const snapshot = await db.collection('pets').get();
  const values = snapshot.docs.map(doc => doc.data());

  if (petType !== "" && petSize === "") {
    const filteredPetType = values.filter(data => data.type === petType)
    res.status(200).json({ success: true, dataLength: filteredPetType.length, value: filteredPetType })
  } else if (petType === "" && petSize !== "") {
    const filterPetSize = values.filter(data => {
      if (petSize === 3) {
        return data.size === "Tiny" || data.size === "Small" || data.size === "Medium";
      } else if (petSize === 2) {
        return data.size === "Tiny" || data.size === "Small";
      } else if (petSize === 1) {
        return data.size === "Tiny";
      } else {
        return data;
      }
    })
    res.status(200).json({ success: true, dataLength: filterPetSize.length, value: filterPetSize })
  } else {
    res.status(200).json({ success: true, dataLength: values.length, value: values })
  }
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
exports.app = functions.https.onRequest(app);