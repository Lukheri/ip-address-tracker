import React from 'react'
import BannerImg from '../assets/pattern-bg-desktop.png'

const Banner = () => {
  return (
    <div className='relative h-[250px] w-full'>
      <img
        src={BannerImg}
        className='absolute top-0 -z-10 h-full w-full'
        alt='banner'
      />
      <div className='flex w-full flex-col items-center justify-center gap-5 p-6'>
        <h1 className='font-rubik text-2xl font-medium text-white'>
          IP Address Tracker
        </h1>
        <form className='flex min-w-[450px]'>
          <input
            className='w-full rounded-l-xl px-6 py-3'
            placeholder='Search for any IP address or domain'
          />
          <button className='rounded-r-xl bg-gray-900 px-6'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
              <path
                fill='none'
                stroke='#FFF'
                stroke-width='3'
                d='M2 1l6 6-6 6'
              />
            </svg>
          </button>
        </form>
      </div>
      {/* <div
        className='absolute bottom-0 h-[100px] w-[700px] bg-white'
        style={{ border: '1px solid red' }}
      ></div> */}
    </div>
  )
}

export default Banner
