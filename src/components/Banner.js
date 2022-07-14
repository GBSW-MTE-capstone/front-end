import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowCircleDown } from 'react-icons/fa'

const images = [
  { url: 'https://github.com/GBSW-MTE-capstone/front-end/blob/main/src/assets/banner.png?raw=true' },
  { url: 'https://img.newsa.kr/http://dk.breaknews.com/imgdata/dk_breaknews_com/201910/2019101749178330.jpg' }
]

let myCounter = 0
let timeout = null
const Banner = () => {
  const [index, setIndex] = useState(0)
  const [counter, setCounter] = useState(0)

  myCounter = counter
  timeout = setInterval(() => {
    setCounter(counter => counter + 1)
    if (index === images.length - 1) return setIndex(0)
    setIndex(index + 1)
    if (myCounter === 10) clearInterval(timeout)
  }, 10000)

  useEffect(() => {
    return () => clearInterval(timeout)
  }, [])

  return (
    <AnimatePresence>
      <div className='relative'>
        <a className='absolute inset-0 z-10 text-center flex flex-col items-start ml-36 justify-center text-white drop-shadow-2xl'>
          <h1 className='tracking-wider font-thin text-6xl'>Welcome to Uiseong</h1>
          <p className='text-3xl mt-2 drop-shadow-2xl shadow-blue-500'>활력이 넘치는 지역. 의성에 어서 오세요!</p>
          <p className='animate-bounce mt-8 flex items-center gap-1'><FaArrowCircleDown/>스크롤해서 알아보기</p>
        </a>
        <motion.img
          className='h-screen object-cover w-full'
          key={index}
          src={images[index].url}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>
    </AnimatePresence>
  )
}

export default Banner
