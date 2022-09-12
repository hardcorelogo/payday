import {getPriceData, prepareTickers} from 'helpers/poloniex'
import {getCodes, getCodesWithNames, Market} from 'helpers/codes'

async function getPoloniexTickers() {
  const codes = await getCodes(Market.Poloniex)
  const data = await getPriceData(codes)
  const codesWithNames = await getCodesWithNames(Market.Poloniex)
  const tickers = await prepareTickers(data, codesWithNames)
  return tickers
}

export {getPoloniexTickers}
