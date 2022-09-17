import 'dotenv/config'
import {Market} from 'helpers/codes'
import {getDatabaseConnection, saveTickers} from 'helpers/database'
import {getBinanceTickers, getBitfinexTickers, getPoloniexTickers} from 'scrappers'

export default async function handler() {
  const db = await getDatabaseConnection()
  await Promise.all([
    saveTickers(db, Market.Bitfinex, await getBitfinexTickers()),
    saveTickers(db, Market.Binance, await getBinanceTickers()),
    saveTickers(db, Market.Poloniex, await getPoloniexTickers()),
  ])
}

exports.handler = handler
