import { IPAdress } from '../constants/types'

const IpDetails = ({ ipAddress }: { ipAddress: IPAdress | undefined }) => {
  return (
    <>
      {ipAddress && (
        <div className='flex w-full flex-col justify-center rounded-xl bg-white p-2 shadow-lg sm:mt-6 sm:max-w-[80%] sm:flex-row sm:gap-4 sm:p-6'>
          <div className='flex flex-1 flex-col items-center gap-1 p-2 font-rubik sm:items-start sm:border-r-2'>
            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
              Ip address
            </span>
            <span className='text-lg font-semibold sm:text-xl'>
              {ipAddress.ip}
            </span>
          </div>
          <div className='flex flex-1 flex-col items-center gap-1 p-2 font-rubik sm:items-start sm:border-r-2'>
            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
              Location
            </span>
            <span className='text-lg font-semibold sm:text-xl'>{`${ipAddress.location.region}, ${ipAddress.location.country}`}</span>
          </div>
          <div className='flex flex-1 flex-col items-center gap-1 p-2 font-rubik sm:items-start sm:border-r-2'>
            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
              Timezone
            </span>
            <span className='text-lg font-semibold sm:text-xl'>
              {ipAddress.location.timezone}
            </span>
          </div>
          <div className='flex flex-1 flex-col items-center gap-1 p-2 font-rubik sm:items-start'>
            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
              ISP
            </span>
            <span className='text-lg font-semibold sm:text-xl'>
              {ipAddress.isp}
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default IpDetails
