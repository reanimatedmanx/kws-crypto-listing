interface CoinMarketDataProxyInterface {
  current_price?: Record<string, number> | unknown;
  // Other fields here.
}

export interface CoinProxyInterface {
  id?: string;
  symbol?: string;
  name?: string;
  market_data: CoinMarketDataProxyInterface;
  last_updated: Date;
  // Other fields here.
}
