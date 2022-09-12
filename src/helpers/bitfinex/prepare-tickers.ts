import {TickerCodes} from 'helpers/codes'
import {Ticker} from 'scrappers'
import {BitfinexTicker} from './get-price-data'

async function prepareTickers(data: BitfinexTicker[], codes: TickerCodes): Promise<Ticker> {
  const tickers: Ticker = {}
  for await (const ticker of data) {
    const name = codes[ticker[0]]
    tickers[name] = ticker[1]
  }
  return tickers
}

export {prepareTickers}
