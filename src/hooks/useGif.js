import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export const useGif = (tag) => {

    
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const [gif, setgif] = useState("");
    const [loading , setLoading] = useState(false)
    const [heading , setHeading] = useState('RANDOM GIF');

  async function fetchData() {
    setLoading(true);
    const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
    const imgSource = data.data.images.downsized_large.url;
    setgif(imgSource)
    setLoading(false)
    setHeading( tag ? `RANDOM ${tag} GIF` : "RANDOM GIF");
  }

  useEffect( () => {
    fetchData();
  }, [])

  return {gif, loading, fetchData, heading}

}
