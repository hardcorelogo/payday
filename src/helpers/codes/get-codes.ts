import codes from './codes.json'
import {Market} from './market'

type TickerCodes = {
  [market: string]: string
}

async function getCodes(market: Market): Promise<string[]> {
  return codes.map(m => m[market])
}

async function getCodesWithNames(market: Market): Promise<TickerCodes> {
  const tickerCodes: TickerCodes = {}
  for await (const code of codes) {
    tickerCodes[code[market]] = code['name']
  }
  return tickerCodes
}

export {getCodes, getCodesWithNames, TickerCodes}
