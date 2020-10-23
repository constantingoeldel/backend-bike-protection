import {Router } from 'express'
import * as admin from 'firebase-admin';

const router = Router()
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://bike-protection.firebaseio.com'
  });
const db = admin.firestore()

const docRef = db.collection('users').doc('alovelace');


router.post('/', async (req, res, next) => {
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      });
    res.end('Hello')
})
export default router