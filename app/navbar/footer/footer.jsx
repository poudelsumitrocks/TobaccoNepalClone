import { div } from 'framer-motion/client'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { MdOutlineWhatsapp } from 'react-icons/md'

export default function Footer () {
  return (
    <div className='bg-[#150D06] w-full'>
      <section className='max-w-7xl mx-auto pt-10 px-4'>
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-2 mb-8 lg:gap-x-5'>

          {/* 1ST DIV */}
          <div className='flex flex-col col-span-2 lg:col-span-1 lg:max-w-md'>
            <h1 className='text-[#FF7700] text-2xl leading-relaxed font-bold mb-4'>
              Tobacco<span className='text-[#FFC100]'>Nepal</span>
            </h1>
          
              <p className=' text-[#F6E3AC] leading-relaxed  text-justify mb-4 lg:max-w-md'>
                Discover genuine Nepalese tobacco items that arent found
                anywhere else. Experience unique flavors that capture the spirit
                of Nepals cultural legacy.
              </p>
          
            <div className='flex items-center gap-4'>
              <FaFacebook className=' text-[#AB4600]' size={35} />
              <MdOutlineWhatsapp className='text-[#AB4600]' size={40} />
            </div>
          </div>


          {/* 2ND DIV */}
          <div className=' flex flex-col  lg:max-w-md gap-2'>
            <h1 className='text-[#FF7700]  font-bold text-xl mb-2'>
              Quick Links
            </h1>
            <Link
              href={'/'}
              className='text-[#C28957] hover:text-[#FFDF20] translation duration-200 text-xs '
            >
              Home
            </Link>
            <Link
              href={'/product'}
              className='text-[#C28957] hover:text-[#FFDF20] translation duration-200  text-xs'
            >
              Products
            </Link>
            <Link
              href={'/about'}
              className='text-[#C28957] hover:text-[#FFDF20] translation duration-200  text-xs'
            >
              About Us
            </Link>
            <Link
              href={'/gallery'}
              className='text-[#C28957] hover:text-[#FFDF20] translation duration-200  text-xs'
            >
              Gallery
            </Link>
            <Link
              href={'/contact'}
              className='text-[#C28957] hover:text-[#FFDF20] translation duration-200  text-xs'
            >
              Contact Us
            </Link>
          </div>

        {/* 3rd DIV */}
          <div className='flex flex-col w-full'>
            <h1 className='text-[#FF7700]  font-bold text-lg mb-4'>Legal</h1>

            <Link
              href={''}
              className='text-[#C28957] space-y-3 hover:text-[#FFDF20] text-sm translation duration-200 '
            >
              legal notice, privacy & compliance policy
            </Link>
          </div>
        </div>


        <div className='rounded-lg p-4 mb-8 flex items-center justify-center gap-4 bg-[#522D0C]'>
          <div>
            <span className='text-white font-bold text-sm  bg-[#BB4D00] rounded-full w-8 h-8 flex justify-center items-center'>
              !
            </span>
          </div>
          <p className='text-white  font-medium  text-center'>
            Warning: These products contain Nicotine. Nicotine is an addictive
            chemical.
          </p>
        </div>

        <div className='border border-gray-800 ' />
        <div className='text-center p-5'>
          <p className='text-sm text-white'>
            All Right Reserved @
            <span className='font-bold text-sm'>
              Uchha Himal Product Pvt. Ltd.
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}