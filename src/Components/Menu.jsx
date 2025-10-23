import React from 'react'
import italican from '../assets/italicanPizza.png'
import venecia from '../assets/veneciePizza.png'
import meat from '../assets/meatPizzas.png'
import chees from '../assets/cheesPizza.png'
import back from '../assets/Menu.png'

const Menu = () => {
    return (
        <>

            <section className='bg-[#1E0D00]'>
                <div className="container max-w-[100%] w-[90%] mx-auto">
                    < div className="main-wrapper relative">

                        <p className='text-[48px] text-white text-center font-bold'>Menu</p>

                        <div className="categories-box flex items-center  gap-[24px] mx-auto flex-wrap py-[20px]">
                            <button style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }}
                                className='w-[140px] h-[40px] rounded-[100px] border-none text-white text-[14px] font-medium shadow-[0px_9px_40px_10px_#FF6B000F] md:w-[190px] md:h-[62px] md:text-[22px]'>Show All</button>
                            <button className='bg-[#210A01] w-[80px] h-[40px] rounded-[100px] text-white text-[14px] shadow-[0px_9px_40px_0px_#FF6B000F] md:w-[190px] md:h-[62px] md:text-[22px]'>Meat</button>
                            <button className='bg-[#210A01] w-[130px] h-[40px] rounded-[100px] text-white text-[14px] shadow-[0px_9px_40px_0px_#FF6B000F] md:w-[190px] md:h-[62px] md:text-[22px]'>Vegetarian</button>
                            <button className='bg-[#210A01] w-[140px] h-[40px] rounded-[100px] text-white text-[14px] shadow-[0px_9px_40px_0px_#FF6B000F] md:w-[190px] md:h-[62px] md:text-[22px]'>Sea products</button>
                            <button className='bg-[#210A01] w-[130px] h-[40px] rounded-[100px] text-white text-[14px] shadow-[0px_9px_40px_0px_#FF6B000F] md:w-[190px] md:h-[62px] md:text-[22px]'>Mushroom</button>
                        </div>

                        <div className='flex flex-wrap gap-[20px] justify-center pt-[70px] gap-y-[60px] relative'>
                            <img className='absolute w-[285px] top-0 left-0' src={back} alt="" />


                            <div className="card w-[181px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] py-[30px]">
                                <img className='absolute top-[-50px] w-[120px] hover:animate-spin' src={italican} alt="" />
                                <p className='font-medium text-white text-[15px] text-center'>Italican</p>
                                <p className='font-medium text-[#A3A3A3] text-[10px] text-start w-[140px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                                <div className='flex justify-between items-center w-[100%] px-[30px]'>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>22</p>
                                    <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px]'>28</p>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>33</p>
                                </div>

                                <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent'>+ Ingridients</button>

                                <div className='flex gap-[20px] items-center'>


                                    <p className='text-white font-medium text-[15px]'>8,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                    <div className='flex items-center gap-[5px]'>
                                        <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px]'>-</p>
                                        <p className='text-[#A3A3A3] text-[15px]'>1</p>
                                        <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px]'>+</p>
                                    </div>

                                </div>

                                <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px]'>Order now</button>
                            </div>

                            <div className="card w-[181px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] py-[30px]">
                                <img className='absolute top-[-50px] w-[120px] hover:animate-spin' src={venecia} alt="" />
                                <p className='font-medium text-white text-[15px] text-center'>Venecia</p>
                                <p className='font-medium text-[#A3A3A3] text-[10px] text-start w-[140px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                                <div className='flex justify-between items-center w-[100%] px-[30px]'>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>22</p>
                                    <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px]'>28</p>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>33</p>
                                </div>

                                <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent'>+ Ingridients</button>

                                <div className='flex gap-[20px] items-center'>


                                    <p className='text-white font-medium text-[15px]'>7,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                    <div className='flex items-center gap-[5px]'>
                                        <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px]'>-</p>
                                        <p className='text-[#A3A3A3] text-[15px]'>1</p>
                                        <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px]'>+</p>
                                    </div>

                                </div>

                                <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px]'>Order now</button>
                            </div>


                            <div className="card w-[181px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] py-[30px]">
                                <img className='absolute top-[-50px] w-[120px] hover:animate-spin' src={meat} alt="" />
                                <p className='font-medium text-white text-[15px] text-center'>Meat</p>
                                <p className='font-medium text-[#A3A3A3] text-[10px] text-start w-[140px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                                <div className='flex justify-between items-center w-[100%] px-[30px]'>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>22</p>
                                    <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px]'>28</p>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>33</p>
                                </div>

                                <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent'>+ Ingridients</button>

                                <div className='flex gap-[20px] items-center'>


                                    <p className='text-white font-medium text-[15px]'>8,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                    <div className='flex items-center gap-[5px]'>
                                        <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px]'>-</p>
                                        <p className='text-[#A3A3A3] text-[15px]'>1</p>
                                        <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px]'>+</p>
                                    </div>

                                </div>

                                <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px]'>Order now</button>
                            </div>

                            <div className="card w-[181px] bg-[#210A01] rounded-[19px] flex flex-col items-center gap-[10px] relative pt-[60px] py-[30px]">
                                <img className='absolute top-[-50px] w-[120px] hover:animate-spin' src={chees} alt="" />
                                <p className='font-medium text-white text-[15px] text-center'>Cheese</p>
                                <p className='font-medium text-[#A3A3A3] text-[10px] text-start w-[140px]'>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>

                                <div className='flex justify-between items-center w-[100%] px-[30px]'>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>22</p>
                                    <p style={{ background: 'linear-gradient(261.69deg, #FF5924 12.12%, #FFA229 86.72%)' }} className='w-[24px] h-[24px] rounded-full text-white flex items-center justify-center text-[10px]'>28</p>
                                    <p className='w-[24px] h-[24px] border-[1px] border-[#A3A3A3] rounded-full text-[#A3A3A3] flex items-center justify-center text-[10px]'>33</p>
                                </div>

                                <button className='w-[118px] h-[23px] rounded-[51px] border-[#FFA229] border-[1px] bg-linear-to-r from-[#FF5924] to-[#FFA229] bg-clip-text text-[10px] font-light text-transparent'>+ Ingridients</button>

                                <div className='flex gap-[20px] items-center'>


                                    <p className='text-white font-medium text-[15px]'>8,35 <span className='relative bottom-[3px] right-[4px] text-[10px]'>$</span></p>


                                    <div className='flex items-center gap-[5px]'>
                                        <p className='border-[#A3A3A3] border-[1px] rounded-full w-[14px] h-[14px] text-[#A3A3A3] text-[12px] flex items-center justify-center pb-[2px]'>-</p>
                                        <p className='text-[#A3A3A3] text-[15px]'>1</p>
                                        <p className='bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-full w-[14px] h-[14px] text-white text-[12px] flex items-center justify-center pb-[2px]'>+</p>
                                    </div>

                                </div>

                                <button className='w-[118px] h-[27px] bg-linear-to-r from-[#FFA229] to-[#FF5924] rounded-[52px] text-white text-[10px]'>Order now</button>
                            </div>

                        </div>

                    </div>
                </div >
            </section >


        </>
    )
}

export default Menu