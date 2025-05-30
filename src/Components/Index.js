import React from 'react'
import mainimage from '../images/me.png'

function Index() {
  return (
    <div>
        <div className='size-full flex justify-center'>
            <img src={mainimage} alt='divya gorule-walunj' />
            <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">About Me</span>
            </Link> 
        </div>
        <div>
                  {/* <a href="/images/cv.pdf" download="" class="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"><img src="/images/download.png" alt="icon" class="mr-2" />Download CV</a> */}
                  <a href="/asset/Divya_Sandip_Walunj_Fullstack_Developer.docx" download="" className="inline-flex items-center mx-auto bg-orange-400 px-8 py-3 text-lg text-white rounded-[35px] mt-6">Download CV</a>
                </div>
    </div>
  )
}

export default Index