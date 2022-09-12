import {getPriceData, prepareTickers} from 'helpers/bitfinex'
import {getCodes, getCodesWithNames, Market} from 'helpers/codes'

async function getBitfinexTickers() {
  const codes = await getCodes(Market.Bitfinex)
  const data = await getPriceData(codes)
  const codesWithNames = await getCodesWithNames(Market.Bitfinex)
  const tickers = await prepareTickers(data, codesWithNames)
  return tickers
}

export {getBitfinexTickers}
