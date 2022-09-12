import {TickerCodes} from 'helpers/codes'
import {Ticker} from 'scrappers'
import {BinanceTicker} from './get-price-data'

async function prepareTickers(data: BinanceTicker[], codes: TickerCodes): Promise<Ticker> {
  const tickers: Ticker = {}
  for await (const ticker of data) {
    const name = codes[ticker.symbol]
    tickers[name] = +ticker.price
  }
  return tickers
}

export {prepareTickers}
