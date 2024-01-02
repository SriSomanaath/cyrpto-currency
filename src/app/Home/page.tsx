"use client";

import { useGetCryptosQuery } from "@/Services/CryptoApi";
import Cyrptocurriences from ".././Cyrptocurriences/page";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import millify from 'millify';

interface CryptoData {
  data: {
    stats: {
      total: number;
      total24hVolume: number;
      totalMarkets: number;
      totalMarketCap: number;
    };
  };
}

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const [globalStats, setGlobalStats] = useState<CryptoData | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (data && data.data && data.data.stats) {
      setGlobalStats(data as CryptoData); // Type assertion to CryptoData
    }
  }, [data]);

  console.log("data", globalStats);

  return (
    <div>
      <h1 className="font-bold text-6xl m-10 text-gray-700">Global Crypto Stats</h1>
      <div className="flex flex-row justify-around">
      {globalStats ? (
      <div className="flex flex-col">
        <div className="flex flex-col m-5">
          <span>Total Cryptocurrencies</span>
          <span>{globalStats.data.stats.total}</span>
        </div>
        <div className="flex flex-col m-5">
          <span>Total Market Cap</span>
          <span>{`$${millify(globalStats.data.stats.total24hVolume)}`}</span>
        </div>
      </div>
) : (
  <p>Loading...</p>
)}
{globalStats ? (
  <div className="flex flex-col">
    <div className="flex flex-col m-5">
      <span>Total Cryptocurrencies</span>
      <span>{millify(globalStats.data.stats.totalMarkets)}</span>
    </div>
    <div className="flex flex-col m-5">
      <span>Total Market Cap</span>
      <span>{`$${millify(globalStats.data.stats.totalMarketCap)}`} </span>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}

      </div>
          <div className="flex justify-between p-6 max-sm:p-2">
            <h1 className="text-2xl font-bold">Top 10 Cyrptocurriences in the world</h1>
            <Link className="text-black p-2 rounded-lg font-bold text-xl max-sm:text-sm sm:text-md md:text-md bg-major3" href="/Cyrptocurriences">Show more</Link>
          <div>
        </div>
      </div>
      <Cyrptocurriences simplified/>
    </div>
  );
}

export default Home;