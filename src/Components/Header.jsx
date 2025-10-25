import React from 'react'
import pzzza from '../assets/pizzashop.png'
import burger from '../assets/burger.png'
const Header = () => {
  return (
    <>
      <header className='bg-black p-[30px]'>
        <div className='mx-auto mx-w-[100% ] w-[85%]'>
          <div className='flex items-center justify-between'>
            <img src={pzzza} alt="" />
            <div className='hidden lg:block'>
              <ul className='flex items-center justify-center gap-[30px] '>
                <li className='hover:text-[orange] text-white'>Home</li>
                <li className='hover:text-[orange] text-white'>Menu</li>
                <li className='hover:text-[orange] text-white'>Events</li>
                <li className='hover:text-[orange] text-white'>About us</li>
              </ul>
            </div>
            <ul>
              <li>

                <button className='hidden lg:block w-[200px] p-[12px] rounded-2xl bg-[darkorange] hover:bg-[orange]  '>Log in</button>
              </li>
            </ul>
            <img className='block lg:hidden' src={burger} alt="" />
          </div>

        </div>
      </header>
    </>
  )
}

export default Header