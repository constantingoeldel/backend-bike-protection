import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: 'bike-protection',
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.DATABASE_URL,
})
export const db = admin.firestore()
