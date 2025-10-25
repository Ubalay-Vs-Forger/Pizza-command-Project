import React from 'react'
import pizasirs from '../assets/pizasir.png'
import pizas from '../assets/pizash.png'
import saladpz from '../assets/saladpz.png'
import odam from '../assets/people.png'
import chese from '../assets/shesepz.png'
const Ubay2section = () => {
  return (
    <>
      <section className='bg-[#210A01] p-[30px]'>
        <div className='mx-auto w-[85%] mx-w-[100%]'>
          <div className='flex items-center justify-between'>
            <div
              className=" bg-cover bg-center w-[600px] "
              style={{ backgroundImage: `url(${pizasirs})` }}
            >
              <p className='text-white text-7xl w-[391px] py-[30px] pt-[80px] pl-[30px]'><b>HOW WE COOKING</b></p>
              <button className='w-[160px] mb-[10px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
              {/* Content yozmoqchi bo‘lsangiz shu yerga */}
            </div>
            <div className='bg-cover bg-center w-[600px]'
              style={{ backgroundImage: `url(${pizas})` }}>
              <p className='text-white text-7xl w-[391px] py-[30px] pt-[120px] pl-[30px]'><b>OUR BLOG</b></p>
              <button className=' mb-[40px] w-[160px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
            </div>
            <div>
              <h1 className='text-6xl text-end text-white'><b>Events</b></h1>
              <p className='w-[300px] text-white text-end pt-[30px]'>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
            </div>

          </div>
          <div>
            <div className='bg-cover bg-center w-[1737px] mt-[30px]'
              style={{ backgroundImage: `url(${saladpz})` }}>
              <p className='text-white text-7xl w-[391px] py-[30px] pt-[120px] pl-[30px]'><b>KITCHEN TOUR</b></p>
              <button className=' mb-[40px] w-[200px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
            </div>
          </div>
          <div className='flex items-center justify-between mt-[20px] gap-[30px]'>
            <div
              className=" bg-cover bg-center w-[600px] "
              style={{ backgroundImage: `url(${pizas})` }}
            >
              <p className='text-white text-5xl w-[391px] py-[30px] pt-[80px] pl-[30px]'><b>FREE COFFEE FOR 3 PIZZA</b></p>
              <button className='w-[160px] mb-[10px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
              {/* Content yozmoqchi bo‘lsangiz shu yerga */}
            </div>
            <div
              className=" bg-cover bg-center w-[600px] "
              style={{ backgroundImage: `url(${odam})` }}
            >
              <p className='text-white text-5xl w-[391px] py-[30px] pt-[80px] pl-[30px]'><b>OUR INSTAGRAM</b></p>
              <button className='w-[160px] mb-[10px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
              {/* Content yozmoqchi bo‘lsangiz shu yerga */}
            </div>
            <div
              className=" bg-cover bg-center w-[600px] "
              style={{ backgroundImage: `url(${chese})` }}
            >
              <p className='text-white text-5xl w-[391px] py-[20px] pt-[60px] pl-[30px]'><b>WHERE ARE YOU CHOOSE US?</b></p>
              <button className='w-[160px] mb-[10px] p-[11px] text-white bg-[orange] ml-[30px] rounded-2xl'><b>More</b></button>
              {/* Content yozmoqchi bo‘lsangiz shu yerga */}
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Ubay2section