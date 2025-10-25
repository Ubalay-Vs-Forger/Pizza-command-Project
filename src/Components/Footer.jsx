import React from 'react'
import logo from '../assets/pizzashop.png'
import socials from '../assets/socialsImages.png'

const Footer = () => {
  return (
    <div>

      <footer className='bg-[#170A00]'>
        <div className="footer-wrapper p-[20px]">

          <div className="footer-top lg:flex gap-[50px] lg:items-start">

            <img className='lg:w-[142px] lg:h-[33px] ' src={logo} alt="" />

            <div className="lists flex flex-wrap gap-[100px] pt-[30px] gap-y-[50px]">

              <ul className='flex flex-col gap-[10px]'>
                <p className='text-[#A3A3A3] font-medium text-[15px] lg:text-[20px]'>Home</p>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">To Order</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">About us</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Events</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">To Order</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Menu</a></li>
              </ul>

              <ul className='flex flex-col gap-[10px]'>
                <p className='text-[#A3A3A3] font-medium text-[15px] lg:text-[20px]'>Events</p>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px] ' href="">3 Pizza 1 Free Coffee</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px] ' href="">2 Pizza for 1 Price  </a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px] ' href="">Kitchen Tour</a></li>
              </ul>

              <ul className='flex flex-col gap-[10px]'>
                <p className='text-[#A3A3A3] font-medium text-[15px] lg:text-[20px]'>Menu</p>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Show All</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Seaproducts</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Vegan</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Meat</a></li>
              </ul>


              <ul className='flex flex-col gap-[10px]'>
                <p className='text-[#A3A3A3] font-medium text-[15px] lg:text-[20px]'>Abuot us</p>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Our History</a></li>
                <li><a className='text-[#515151] text-[14px] font-medium lg:text-[17px]' href="">Why We?</a></li>
              </ul>

            </div>

          </div>

          <div className="footer-bottom flex items-center justify-between pt-[20px]">

            <p className='bg-clip-text bg-linear-to-r from-[#FF612E] to-[#FFA32B] text-transparent text-[14px] lg:text-[20px]'>+7 (937) 333-55-33</p>

            <img src={socials} alt="" />

          </div>

        </div>
      </footer>

    </div>
  )
}

export default Footer