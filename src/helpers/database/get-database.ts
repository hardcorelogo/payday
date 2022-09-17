import {initializeApp, cert} from 'firebase-admin/app'
import {getFirestore} from 'firebase-admin/firestore'
import {getApps} from 'firebase-admin/app'

const credentials = {
  projectId: process.env.PROJECT_ID,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
}

async function getDatabaseConnection() {
  if (getApps().length === 0) initializeApp({credential: cert(credentials)})
  return getFirestore()
}

export {getDatabaseConnection}
