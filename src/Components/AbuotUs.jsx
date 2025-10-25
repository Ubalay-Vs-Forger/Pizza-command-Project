import React from 'react'
import pizzas from '../assets/pizzas.png'
import right from '../assets/aboutUsPizza.png'
import pizzaSvg from '../assets/pizzaSvgAbout.png'
import pizzaFrie from '../assets/firesAbout.png'
import arrow from '../assets/arrowAbuot.png'

const AbuotUs = () => {
    return (
        <div>

            <section>

                <div className="flex items-center bg-[#1E0C00] px-[5%] flex-col-reverse lg:flex-row lg:justify-between pb-[100px]">

                    <div className="left">
                        <p className='font-bold text-[48px] text-white lg:text-[69px]'>About us</p>
                        <p className='text-[14px] text-[#A3A3A3] w-[100%] max-w-[600px] text-start lg:text-[19px] lg:max-w-[459px] '>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
                        <img className='w-[343px] lg:w-[490px]' src={pizzas} alt="" />
                        <p className='text-[14px] text-[#A3A3A3] w-[100%] max-w-[600px] text-start lg:text-[19px] lg:w-[433px]'>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing
                            work in order to receive / prepare / form / deliver customer orders on time.</p>
                    </div>

                    <img className='hidden lg:block' src={arrow} alt="" />

                    <div className="right relative">
                        <img className='absolute top-[-40px] right-[-10px] w-[117px] lg:w-[200px] lg:top-[-60px] lg:right-[-20px]' src={pizzaSvg} alt="" />
                        <img className='w-[356px] lg:w-[567px] ' src={right} alt="" />
                        <img className='absolute bottom-[-10px] left-[-20px] w-[117px] lg:w-[200px]' src={pizzaFrie} alt="" />
                    </div>

                </div>
            </section>

        </div>
    )
}

export default AbuotUs