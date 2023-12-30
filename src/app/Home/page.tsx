"use client";

import { useGetCryptosQuery } from "@/Services/CryptoApi";

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery();

  console.log("data.........", data)

  return (
    <div>Home</div>
  )
}

export default Home