import React from 'react'
import {Random} from "./components/Random"
import { Tag } from './components/Tag'


export const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      
      <h1 className='w-11/12 bg-white rounded-2xl text-center mt-[40px] px-10 py-4 text-3xl font-bold  '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-10 '>
        <Random/>
        <Tag/> 
      </div>

    </div>
  )
}
