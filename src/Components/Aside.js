import React from 'react'
import avtar from '../images/me.png'

function Aside() {
  return (
    <div className='w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] p-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 '>
                <img src={avtar} alt='avatar' className='h-[240px] w-[240px] rounded-[20px] m-auto'/>
                <div className="py-[10px]">
                <h1 className="mt-6 mb-1 text-xl font-semibold dark:text-white">Divya Walunj</h1>
                <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">Passionate Full Stack Developer</h3>
                </div>
                <div className='flex flex-col p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]'>
                  <div className='flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]'>
                    <div className="text-left ml-2.5">
                      <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                      <p className="dark:text-white break-all">
                        <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+918898357456">+8898357456</a>
                      </p>
                    </div>

                  </div>
                  <div className='flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]'>
                    <div className="text-left ml-2.5">
                      <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                      <p className="dark:text-white break-all">
                        <a className="hover:text-[#FA5252] duration-300 transition" href="mailto:goruledivya2196@gmail.com">goruledivya2196@gmail.com</a>
                      </p>
                    </div>

                  </div>
                  <div className='flex py-2.5 '>
                    <div className="text-left ml-2.5">
                      <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Address</p>
                      <p className="dark:text-white break-all">
                        Digha, Navi Mumbai–400708.
                      </p>
                    </div>

                  </div>

                </div>
                <div>
                  {/* <a href="/images/cv.pdf" download="" class="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"><img src="/images/download.png" alt="icon" class="mr-2" />Download CV</a> */}
                  <a href="/asset/Divya_Sandip_Walunj_Fullstack_Developer.docx" download="" className="inline-flex items-center mx-auto bg-orange-400 px-8 py-3 text-lg text-white rounded-[35px] mt-6">Download CV</a>
                </div>
                 {/* <h3 className="text-l font-bold">Hi, I'm</h3>
                <h1 className="text-xl font-bold text-orange-600"></h1>
                <h3 className="font-bold text-orange-500"> </h3>
                <p className="text-m">Turning ideas into interactive websites using WordPress, React, PHP, and MySQL.</p>  */}
              </div>
  )
}

export default Aside