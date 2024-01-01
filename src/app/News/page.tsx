"use client";

import React, { useState, useEffect } from 'react';
import { getCoinDeskNews } from "@/Services/BingNewsApi";
import { useQuery } from '@tanstack/react-query';

const Page = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['getCoinDeskNews'],
    queryFn: getCoinDeskNews,
  });

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      setIsDataLoaded(true);
    }
  }, [data]);

  console.log("data of bing:", data);

  return (
    <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {isLoading && <p>Loading...</p>}
      {data?.data.map((item, index) => (
        <div key={index} className="flex flex-col bg-white p-4 rounded-lg">
          <img src={item['thumbnail']} className="w-full h-40 object-cover mb-4" alt={item['title']} />
          <h1 className="text-black text-xl font-bold mb-2">{item['title']}</h1>
          <p className="text-contentTextColor mb-4">{item['description']}</p>
          <span className="text-white font-bold">{item['createdAt']}</span>
        </div>
      ))}
    </div>
  );
};

export default Page;