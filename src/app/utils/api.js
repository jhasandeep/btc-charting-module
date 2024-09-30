import axios from "axios";

export const fetchHistoricalData = async (interval = "1m") => {
  const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}`;
  const response = await axios.get(url);
  return response.data.map(([time, open, high, low, close, volume]) => ({
    time,
    open: parseFloat(open),
    high: parseFloat(high),
    low: parseFloat(low),
    close: parseFloat(close),
    volume: parseFloat(volume),
  }));
};
