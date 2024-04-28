import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {

  // const [gif, setgif] = useState("");
  // const [loading , setLoading] = useState(false)

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data} = await axios.get(url);
  //   const imgSource = data.data.images.downsized_large.url;
  //   setgif(imgSource)
  //   setLoading(false)
  // }

  // useEffect( () => {
  //   fetchData();
  // }, [])

  const {gif, loading, heading, fetchData} = useGif();



  return (
    <div className='flex flex-col items-center w-1/2  bg-green-400 justify-evenly border-2 border-gray-500 rounded-2xl gap-8 py-5 ' >

      <h1 className='text-2xl font-bold text-decoration-line: underline '>{heading}</h1>

      {
        loading ? 
        (<Spinner/>) : 
        (<img src={gif}  className='h-[200px]'  alt="Random Cat Gif"/>)
      }

      <button className='w-3/4 mx-auto text-lg py-2 rounded-md bg-green-200 ' onClick={() => fetchData()}>GENERATE</button>

    </div>
  )
}
