'use client'

import useSWR from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const IScroll = () => {
  const [limit, setlimit] = useState(20);
  const [items, setItems] = useState([])
  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState(null)


  const nextfetch = async() => {
    setlimit((prev)=>prev<100?prev+20: prev)
    }

    useEffect(() => {
      setIsMounted(true)
      fetch(`https://dummyjson.com/products?limit=${limit}`).then((response) => response.json().then(data => setItems(data?.products))).catch((error) =>setError(error))
    }, [limit])

    if(!isMounted) return null;
    
  
  return (
    <div>
    <InfiniteScroll
      dataLength={items.length}
      next={nextfetch}
      hasMore={limit >= 100 ? false : true}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
      scrollThreshold="500px"
    >
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Brand: {item.title}</p>
            <Image width={300} height={300} alt='product'  src={item.thumbnail} />
          </li>

        ))}
      </ul>
    </InfiniteScroll>
    {error && <p>Error</p>}
  </div>
);
}

export default IScroll
