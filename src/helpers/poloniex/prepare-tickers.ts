import {TickerCodes} from 'helpers/codes'
import {PoloniexTicker} from './get-price-data'
import {Ticker} from 'scrappers'

async function prepareTickers(data: PoloniexTicker[], codes: TickerCodes): Promise<Ticker> {
  const tickers: Ticker = {}
  for await (const ticker of data) {
    const name = codes[ticker.symbol]
    tickers[name] = +ticker.price
  }
  return tickers
}

export {prepareTickers}
