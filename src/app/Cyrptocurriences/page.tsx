"use client";

import { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '@/Services/CryptoApi';
import millify from 'millify';

const Cryptocurrencies = ({simplified}:any) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
  }, [cryptoList?.data?.coins]);

  return (
    <div className="p-20 max-sm:p-10 sm:p-10 md:p-14">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 lg:mt-10 lg:mb-10">
      {cryptos && cryptos.map((currency:any, index:any) => (
          <div key={currency.id || index} className="relative w-100 h-100 bg-gray-300 p-8 rounded-lg mb-4">
            <div className="flex flex-row justify-between items-start absolute top-0 left-0 right-0 p-4">
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {currency.name}
              </h5>
              <img className="w-8 h-8" src={currency.iconUrl} alt={currency.name} />
            </div>
            <p className="mt-20">Price: {millify(currency.price)}</p>
            <p>Market Cap: {millify(currency.marketCap)}</p>
            <p>Daily Change: {currency.change}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cryptocurrencies;
