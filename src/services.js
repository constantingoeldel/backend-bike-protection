import { db } from './firestore'

export function readCollection(collection) {
  db.collection(collection)
    .get()
    .then(collection => collection.forEach(doc => console.log('Data received: ', doc.data())))
    .catch(error => console.log('The following error occured: ', error))
}
export function liveReadCollection(collection) {
  db.collection(collection).onSnapshot(
    collection => collection?.forEach(doc => console.log('Data received: ', doc.data())),
    error => console.log('The following error occured: ', error)
  )
}
export function readDocument(document) {
  db.doc(document)
    .get()
    .then(doc => console.log('Data received: ', doc.data()))
    .catch(error => console.log('The following error occured: ', error))
}
export function liveReadDocument(document) {
  db.doc(document).onSnapshot(
    doc => console.log('Data received: ', doc.data()),
    error => console.log('The following error occured: ', error)
  )
}
export function addDocument(collection, document) {
  db.collection(collection)
    .add(document)
    .then(doc => console.log('Document written with ID: ', doc.id))
    .catch(error => console.error('Error adding document: ', error))
}

export function setDocument(documentPath, document, merge = true) {
  db.doc(documentPath)
    .set(document, { merge: merge })
    .then(doc => console.log('Document written!'))
    .catch(error => console.error('Error adding document: ', error))
}
