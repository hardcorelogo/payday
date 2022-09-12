import {initializeApp, cert} from 'firebase-admin/app'
import {getFirestore} from 'firebase-admin/firestore'

const credentials = {
  projectId: process.env.PROJECT_ID,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: process.env.PRIVATE_KEY,
}

async function getDatabaseConnection() {
  initializeApp({credential: cert(credentials)})
  return getFirestore()
}

export {getDatabaseConnection}
