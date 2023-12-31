"use client";

import { useGetCryptosQuery } from "@/Services/CryptoApi";
import { useState, useEffect } from 'react';
import millify from 'millify';

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    // Update globalStats when data is available
    if (data && data.data && data.data.stats) {
      setGlobalStats(data.data.stats);
    }
  }, [data]);

  console.log("dataaaaaaaaaaaaaaa", globalStats);

  return (
    <div>
      <h1 className="text-bold text-6xl m-10 text-gray-700">Global Crypto Stats</h1>
      <div className="flex flex-row justify-around">
        {globalStats ? (
          <div className="flex flex-col">
            <div className="flex flex-col m-5">
              <span>Total Cryptocurrencies</span>
              <span>{globalStats.total}</span>
            </div>
            <div className="flex flex-col m-5">
              <span>Total Market Cap</span>
              <span>{`$${millify(globalStats.total24hVolume)}`}</span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {globalStats ? (
          <div className="flex flex-col">
            <div className="flex flex-col m-5">
              <span>Total Cryptocurrencies</span>
              <span>{millify(globalStats.totalMarkets)}</span>
            </div>
            <div className="flex flex-col m-5">
              <span>Total Market Cap</span>
              <span>{`$${millify(globalStats.totalMarketCap)}`} </span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;