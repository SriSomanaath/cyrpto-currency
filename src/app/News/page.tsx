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
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-20 max-sm:p-10 sm:p-10 md:p-14">
      {isLoading && <p>Loading...</p>}
      {data?.data.map((item: any, index: any) => (
        <div key={index} className="flex flex-col bg-gray-400 p-4 rounded-lg flex">
          <img src={item['thumbnail']} className="w-full h-40 object-cover mb-4" alt={item['title']} />
          <h1 className="text-black text-xl font-bold mb-2">{item['title']}</h1>
          <p className="text-contentTextColor mb-4">{item['description']}</p>
          <div className="flex-grow"></div>
          <span className="text-black font-bold">{item['createdAt']}</span>
          <a href={item['url']} className="bg-blue-300 m-2 rounded-lg font-bold text-center">View More</a>
        </div>
      ))}
    </div>
  );
};

export default Page;