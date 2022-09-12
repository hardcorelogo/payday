import 'dotenv/config'
import {Market} from 'helpers/codes'
import {getDatabaseConnection, saveTickers} from 'helpers/database'
import {getBinanceTickers, getBitfinexTickers, getPoloniexTickers} from 'scrappers'

// prettier-ignore
;(async () => {
  const db = await getDatabaseConnection()
  await Promise.all([
    saveTickers(db, Market.Bitfinex, await getBitfinexTickers()),
    saveTickers(db, Market.Binance, await getBinanceTickers()),
    saveTickers(db, Market.Poloniex, await getPoloniexTickers()),
  ])
})()
