import axios from 'axios'

type BinanceTicker = {
  symbol: string
  price: string
}

async function getPriceData(codes: string[]): Promise<BinanceTicker[]> {
  const query = JSON.stringify(codes)
  const response = await axios.request({
    method: 'GET',
    url: `https://api.binance.com/api/v3/ticker/price?symbols=${query}`,
  })
  return response.data
}

export {BinanceTicker, getPriceData}
