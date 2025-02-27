interface TokenCardProps {
  name: string;
  logo: string;
  price: number;
  volume: number;
  profitPerToken?: number;
  priceChange?: number;
  bestBuy?: string;
  bestBuyPrice?: number;
  bestSell?: string;
  bestSellPrice?: number;
  after10min?: number | null
  after24h?: number | null
}
