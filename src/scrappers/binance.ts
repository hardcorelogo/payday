import {getPriceData, prepareTickers} from 'helpers/binance'
import {getCodes, getCodesWithNames, Market} from 'helpers/codes'

async function getBinanceTickers() {
  const codes = await getCodes(Market.Binance)
  const data = await getPriceData(codes)
  const codesWithNames = await getCodesWithNames(Market.Binance)
  const tickers = await prepareTickers(data, codesWithNames)
  return tickers
}

export {getBinanceTickers}
