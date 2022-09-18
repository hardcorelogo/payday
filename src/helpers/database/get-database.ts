import {initializeApp, cert} from 'firebase-admin/app'
import {getFirestore} from 'firebase-admin/firestore'
import {getApps} from 'firebase-admin/app'
import {decrypt} from 'helpers/decrypt'

async function getDatabaseConnection() {
  if (getApps().length === 0) {
    const isEncrypted = process.env.ENCRYPTED != undefined
    const credentials = {
      projectId: isEncrypted ? await decrypt(process.env.PROJECT_ID) : process.env.PROJECT_ID,
      clientEmail: isEncrypted ? await decrypt(process.env.CLIENT_EMAIL) : process.env.CLIENT_EMAIL,
      privateKey: isEncrypted
        ? (await decrypt(process.env.PRIVATE_KEY)).replace(/\\n/gm, '\n')
        : process.env.PRIVATE_KEY,
    }
    initializeApp({credential: cert(credentials)})
  }
  return getFirestore()
}

export {getDatabaseConnection}
