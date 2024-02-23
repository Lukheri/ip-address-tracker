import React, { useCallback, useState, useEffect } from 'react'
import BannerImg from '../assets/pattern-bg-desktop.png'
import BannerImgMobile from '../assets/pattern-bg-mobile.png'
import IpDetails from './IpDetails'
import Map from './Map'
import { IPAdress } from '../constants/types'

const Banner = () => {
  const [ipFilter, setIpFilter] = useState<string>('')
  const [ipAddress, setIpAddress] = useState<IPAdress | undefined>()
  const apiKey = process.env.REACT_APP_API_KEY

  const getIP = useCallback(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipFilter}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setIpAddress(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipFilter])

  useEffect(() => {
    getIP()
    console.log('yer')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIpFilter(event.target.value as string)
  }

  const handleSubmitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getIP()
  }

  return (
    <div className='relative h-[250px]'>
      <img
        src={BannerImg}
        className='absolute top-0 -z-10 hidden h-full w-full sm:flex'
        alt='banner'
      />
      <img
        src={BannerImgMobile}
        className='absolute top-0 -z-10 h-full w-full sm:hidden'
        alt='banner'
      />
      <div className='flex w-full flex-col items-center justify-center gap-6 p-6'>
        <h1 className='font-rubik text-2xl font-medium text-white'>
          IP Address Tracker
        </h1>
        <form
          onSubmit={handleSubmitFilter}
          className='flex w-full sm:max-w-[450px]'
        >
          <input
            className='w-full rounded-l-xl px-6 py-3 text-xs sm:text-base'
            placeholder='Search for any IP address or domain'
            onChange={handleFilterChange}
          />
          <button type='submit' className='rounded-r-xl bg-gray-900 px-6'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
              <path
                fill='none'
                stroke='#FFF'
                strokeWidth='3'
                d='M2 1l6 6-6 6'
              />
            </svg>
          </button>
        </form>
        <IpDetails ipAddress={ipAddress} />
      </div>
      {ipAddress && <Map country={ipAddress.location.country} />}
    </div>
  )
}

export default Banner
