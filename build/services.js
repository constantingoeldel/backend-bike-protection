"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readCollection = readCollection;
exports.liveReadCollection = liveReadCollection;
exports.readDocument = readDocument;
exports.liveReadDocument = liveReadDocument;
exports.addDocument = addDocument;
exports.setDocument = setDocument;

var _firestore = require("./firestore");

function readCollection(collection) {
  _firestore.db.collection(collection).get().then(collection => collection.forEach(doc => console.log('Data received: ', doc.data()))).catch(error => console.log('The following error occured: ', error));
}

function liveReadCollection(collection) {
  _firestore.db.collection(collection).onSnapshot(collection => collection === null || collection === void 0 ? void 0 : collection.forEach(doc => console.log('Data received: ', doc.data())), error => console.log('The following error occured: ', error));
}

function readDocument(document) {
  _firestore.db.doc(document).get().then(doc => console.log('Data received: ', doc.data())).catch(error => console.log('The following error occured: ', error));
}

function liveReadDocument(document) {
  _firestore.db.doc(document).onSnapshot(doc => console.log('Data received: ', doc.data()), error => console.log('The following error occured: ', error));
}

function addDocument(collection, document) {
  _firestore.db.collection(collection).add(document).then(doc => console.log('Document written with ID: ', doc.id)).catch(error => console.error('Error adding document: ', error));
}

function setDocument(documentPath, document) {
  var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  _firestore.db.doc(documentPath).set(document, {
    merge: merge
  }).then(doc => console.log('Document written!')).catch(error => console.error('Error adding document: ', error));
}