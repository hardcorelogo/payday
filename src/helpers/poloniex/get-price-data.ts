import axios from 'axios'

type PoloniexTicker = {
  symbol: string
  price: string
  time: number
  dailyChange: string
  ts: number
}

async function getPriceData(codes: string[]): Promise<PoloniexTicker[]> {
  const response = await axios.request({
    method: 'GET',
    url: 'https://api.poloniex.com/markets/price',
  })
  const data = response.data.filter(ticker => codes.includes(ticker.symbol))
  return data
}

export {PoloniexTicker, getPriceData}
