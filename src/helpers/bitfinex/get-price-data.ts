import axios from 'axios'

type BitfinexTicker = [
  string,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
]

async function getPriceData(codes: string[]): Promise<BitfinexTicker[]> {
  const query = codes.join(',')
  const response = await axios.request({
    method: 'GET',
    url: `https://api-pub.bitfinex.com/v2/tickers?symbols=${query}`,
  })
  return response.data
}

export {BitfinexTicker, getPriceData}
