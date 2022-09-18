import {Firestore} from 'firebase-admin/firestore'
import {Market} from 'helpers/codes'
import {Ticker} from 'scrappers'
import {decrypt} from 'helpers/decrypt'

async function saveTickers(db: Firestore, market: Market, data: Ticker) {
  const isEncrypted = process.env.ENCRYPTED != undefined
  const collection = isEncrypted ? await decrypt(process.env.COLLECTION) : process.env.COLLECTION
  return db.collection(collection).doc(market).set(data)
}

export {saveTickers}
