/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.postcomments =
    functions.https.onRequest((request, response) => {

        cors(request, response, () => {


            return admin.firestore().collection('comments').add(request.body).then(()=>{
                response.send("Saved in the database");
            });
        })
    });

exports.getcomments = functions.https.onRequest((request, response) =>
{

    cors(request, response,()=>{
        let myData = []
        return admin.firestore().collection('comments').get().then((snapshot) => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                response.send('No data in database');
                return;
            }

            snapshot.forEach(doc => {
                let docObj = {};
                docObj.id = doc.id;
                myData.push(Object.assign(docObj, doc.data()));

            });

            response.send(myData);
        })

    })
});


