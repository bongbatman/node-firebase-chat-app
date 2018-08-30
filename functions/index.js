const functions = require('firebase-functions');
const express = require('express');

//path.join for public static path
const path = require('path');
const publicPath = path.join(__dirname, "../public");

console.log(__dirname+'/../public');
console.log(publicPath);


const app = express();

//express static middleware
app.use(express.static(publicPath));
// app.get('/chat', (req,res) => {
//    res.send('Hi from firebase');
// });
//
exports.app = functions.https.onRequest(app);
