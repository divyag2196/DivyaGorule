import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../Components/Aside'

function Contact() {
  return (
     <div>
      <div className="max-w-screen-xl flex items-start justify-start mx-auto p-4 flex-col lg:flex-row relative">
        <div className="w-full lg:w-[30%] lg:text-left py-8 px-4 sticky h-full ">           
          <Aside />
        </div>
        <div className="w-full lg:w-[70%] p-4 flex flex-col lg:items-end justify-end gap-4" >
          {/* <div className=' bg-white dark:bg-[#111111] rounded-[20px] p-3'>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="m-0 p-2 rounded-[35px] hover:bg-orange-300 transition">
                  <Link to="/" className="block px-3 py-2 text-black "> Home </Link>
                </li>
               <li className="p-2 rounded-[35px] hover:bg-orange-300 transition">
                  <Link to="/resume" className="block px-3 py-2 text-black font-semibold"> Resume </Link>
                </li>
                <li className="m-0 p-2 rounded-[35px]  hover:bg-orange-300 transition">
                  <Link to="/work" className="block px-3 py-2 text-black "> Work </Link>
                </li>
                <li className="m-0 p-2 rounded-[35px] bg-orange-300 transition">
                  <Link to="/contact" className="block px-3 py-2 text-black "> Contact </Link>
                </li>
              </ul>
            </div> 
          </div> */}
          <section className='bg-white dark:bg-[#111] rounded-[20px] p-6 w-[100%]'>
            <h2 className='text-2xl font-bold lg:mb-8'>
              Contact 
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                    <h3 className="text-md font-semibold text-gray-800 dark:text-white">Phone:</h3>
                    <a href="tel:+919607671070" className="block text-gray-600 dark:text-gray-300 hover:text-orange-500">
                        +91 96076 71070
                    </a>
                    <a href="tel:+918898357456" className="block text-gray-600 dark:text-gray-300 hover:text-orange-500">
                        +91 88983 57456
                    </a>
                </div>
                <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                    <h3 className="text-md font-semibold text-gray-800 dark:text-white">Phone:</h3>
                    <a href="tel:+919607671070" className="block text-gray-600 dark:text-gray-300 hover:text-orange-500">
                        +91 96076 71070
                    </a>
                    
                </div>
              
            </div>
            <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300 mt-4'>
                <h2 className='text-2xl font-bold lg:mb-4'>
                    Let's Build Something Together 
                </h2>
                <p>
                    I'm always open to discussing product design, development work, or potential collaborations.
                </p>
                <form >

                </form>
            </div>


            
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact