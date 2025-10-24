import React from 'react'
import pizzaBack from '../assets/pizzaBackground.png'

import back from '../assets/Menu.png'

import argentina from '../assets/argentinaPizza.png'
import gribnoy from '../assets/gribnayaPizza.png'
import italian from '../assets/italian2xPizza.png'
import tomato from '../assets/tomatoPizza.png'

const MenuSecond = () => {
    return (
        <div>

            <section className='bg-[#1E0D00] pt-[50px]'>

                <div className="container max-w-full w-[90%] mx-auto">

                    <div style={{ backgroundImage: `url(${pizzaBack})` }} className="banner bg-cover bg-center bg-no-repeat h-[300px] flex justify-center items-center rounded-[34px] w-[100%]">
                        <p className='text-[white] text-[50px] text-center'>MOST POPULAR PIZZA</p>
                    </div>

                    <div className='flex flex-wrap gap-[20px] justify-between pt-[70px] gap-y-[60px] relative xl:pt-[150px]'>
                        <img className='absolute w-[285px] top-0 left-0 xl:w-[467px] xl:top-[-20px] xl:left-[-20px]' src={back} alt="" />


                        <div className="card w-[181px] md:w-[200px] xl:w-[297px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] xl:gap-[25px] xl:h-[459px]">
                            <img className='absolute top-[-50px] w-[120px] hover:animate-spin md:w-[140px] md:top-[-70px] xl:w-[170px] xl:top-[-90px]' src={argentina} alt="" />
                            <p className='font-medium text-white text-[15px] text-center md:text-[17px] xl:text-[25px]'>Argentina</p>
                            <p className='font-medium text-[#A3A3A3] text-[10px] text-center w-[229px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                            <div className='flex justify-around items-center w-[100%] px-[30px]'>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>22</p>
                                <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>28</p>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>33</p>
                            </div>

                            <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent md:text-[12px] xl:text-[16px] xl:w-[194px] xl:h-[39px]'>+ Ingridients</button>

                            <div className='flex gap-[20px] items-center'>


                                <p className='text-white font-medium text-[15px] xl:text-[25px]'>7,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                <div className='flex items-center gap-[5px]'>
                                    <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>-</p>
                                    <p className='text-[#A3A3A3] text-[15px] xl:text-[22px]'>1</p>
                                    <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>+</p>
                                </div>

                            </div>

                            <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px] xl:w-[194px] xl:h-[45px] xl:text-[17px]'>Order now</button>
                        </div>

                        <div className="card w-[181px] md:w-[200px] xl:w-[297px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] xl:gap-[10px] xl:gap-[25px] xl:h-[459px]">
                            <img className='absolute top-[-50px] w-[120px] hover:animate-spin md:w-[140px] md:top-[-70px] xl:w-[170px] xl:top-[-90px]' src={gribnoy} alt="" />
                            <p className='font-medium text-white text-[15px] text-center md:text-[17px] xl:text-[25px]'>Gribnaya</p>
                            <p className='font-medium text-[#A3A3A3] text-[10px] text-center w-[229px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                            <div className='flex justify-around items-center w-[100%] px-[30px]'>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>22</p>
                                <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>28</p>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>33</p>
                            </div>

                            <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent md:text-[12px] xl:text-[16px] xl:w-[194px] xl:h-[39px]'>+ Ingridients</button>

                            <div className='flex gap-[20px] items-center'>


                                <p className='text-white font-medium text-[15px] xl:text-[25px]'>7,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                <div className='flex items-center gap-[5px]'>
                                    <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>-</p>
                                    <p className='text-[#A3A3A3] text-[15px] xl:text-[22px]'>1</p>
                                    <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>+</p>
                                </div>

                            </div>

                            <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px] xl:w-[194px] xl:h-[45px] xl:text-[17px]'>Order now</button>
                        </div>


                        <div className="card w-[181px] md:w-[200px] xl:w-[297px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] xl:gap-[10px] xl:gap-[25px] xl:h-[459px]">
                            <img className='absolute top-[-50px] w-[120px] hover:animate-spin md:w-[140px] md:top-[-70px] xl:w-[170px] xl:top-[-90px]' src={tomato} alt="" />
                            <p className='font-medium text-white text-[15px] text-center md:text-[17px] xl:text-[25px]'>Tomato</p>
                            <p className='font-medium text-[#A3A3A3] text-[10px] text-center w-[229px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                            <div className='flex justify-around items-center w-[100%] px-[30px]'>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>22</p>
                                <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>28</p>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>33</p>
                            </div>

                            <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent md:text-[12px] xl:text-[16px] xl:w-[194px] xl:h-[39px]'>+ Ingridients</button>

                            <div className='flex gap-[20px] items-center'>


                                <p className='text-white font-medium text-[15px] xl:text-[25px]'>6,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                <div className='flex items-center gap-[5px]'>
                                    <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>-</p>
                                    <p className='text-[#A3A3A3] text-[15px] xl:text-[22px]'>1</p>
                                    <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>+</p>
                                </div>

                            </div>

                            <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px] xl:w-[194px] xl:h-[45px] xl:text-[17px]'>Order now</button>
                        </div>


                        <div className="card w-[181px] md:w-[200px] xl:w-[297px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] xl:gap-[10px] xl:gap-[25px] xl:h-[459px]">
                            <img className='absolute top-[-50px] w-[120px] hover:animate-spin md:w-[140px] md:top-[-70px] xl:w-[170px] xl:top-[-90px]' src={italian} alt="" />
                            <p className='font-medium text-white text-[15px] text-center md:text-[17px] xl:text-[25px]'>Italian 2x</p>
                            <p className='font-medium text-[#A3A3A3] text-[10px] text-center w-[229px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                            <div className='flex justify-around items-center w-[100%] px-[30px]'>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>22</p>
                                <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>28</p>
                                <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px] md:text-[12px] xl:w-[40px] xl:h-[40px] xl:text-[14px]'>33</p>
                            </div>

                            <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent md:text-[12px] xl:text-[16px] xl:w-[194px] xl:h-[39px]'>+ Ingridients</button>

                            <div className='flex gap-[20px] items-center'>


                                <p className='text-white font-medium text-[15px] xl:text-[25px]'>8,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                <div className='flex items-center gap-[5px]'>
                                    <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>-</p>
                                    <p className='text-[#A3A3A3] text-[15px] xl:text-[22px]'>1</p>
                                    <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px] xl:w-[23px] xl:h-[23px]'>+</p>
                                </div>

                            </div>

                            <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px] xl:w-[194px] xl:h-[45px] xl:text-[17px]'>Order now</button>
                        </div>
                    </div>

                </div>

            </section >

        </div >
    )
}

export default MenuSecond