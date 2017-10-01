const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.updateMinutes = functions.https.onRequest((req, resp) => {
    const textNumber = req.query.number;
    const number = parseInt(textNumber);

    admin.database().ref('minutes/0').transaction((minutes) => minutes += number);
    resp.end();
});
