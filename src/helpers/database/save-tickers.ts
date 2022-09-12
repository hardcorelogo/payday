import {Firestore} from 'firebase-admin/firestore'
import {Market} from 'helpers/codes'
import {Ticker} from 'scrappers'

async function saveTickers(db: Firestore, market: Market, data: Ticker) {
  return db.collection(process.env.COLLECTION).doc(market).set(data)
}

export {saveTickers}
