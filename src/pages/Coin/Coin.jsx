import React, { useState, useEffect, useContext } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import LineChart from '../../components/LineChart/LineChart';
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [error, setError] = useState(null); // Dodajemy stan na błąd
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uir9xqGhMTebKr65DsWdfnyr' },
    };

    try {
      const coinRes = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      if (!coinRes.ok) throw new Error(`Error fetching coin data: ${coinRes.statusText}`);
      const coinData = await coinRes.json();
      setCoinData(coinData);

      const chartRes = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
      if (!chartRes.ok) throw new Error(`Error fetching historical data: ${chartRes.statusText}`);
      const historicalData = await chartRes.json();
      setHistoricalData(historicalData);

      setError(null); // Resetujemy błąd po udanej odpowiedzi
    } catch (err) {
      setError(err.message); // Ustawiamy komunikat błędu
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinId, currency]);

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  if (!coinData || !historicalData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image.large} alt={coinData.name} />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24H high</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24H low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
