import React from 'react'
import { Link } from 'react-router-dom';
import Aside from '../Components/Aside';

function Home() {
  return (
    <div>
      <div className="max-w-screen-xl flex items-start justify-start mx-auto p-4 flex-col lg:flex-row relative">
        <div className="w-full lg:w-[30%] lg:text-left py-8 px-4 sticky h-full ">           
          <Aside />
        </div>
        <div className="w-full lg:w-[70%] p-4 flex flex-col lg:items-end justify-end gap-4" >
          <div className=' bg-white dark:bg-[#111111] rounded-[20px] p-3'>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="m-0 p-2 rounded-[35px] bg-orange-300 transition">
                  <Link to="/home" className="block px-3 py-2 text-black "> Home </Link>
                </li>
               <li className="p-2 rounded-[35px] hover:bg-orange-300 transition">
                  <Link to="/resume" className="block px-3 py-2 text-black font-semibold"> Resume </Link>
                </li>
                <li className="m-0 p-2 rounded-[35px] hover:bg-orange-300 transition">
                  <Link to="/work" className="block px-3 py-2 text-black "> Work </Link>
                </li>
                <li className="m-0 p-2 rounded-[35px] hover:bg-orange-300 transition">
                  <Link to="/contact" className="block px-3 py-2 text-black "> Contact </Link>
                </li>
              </ul>
            </div> 
          </div>
          <section className='bg-white dark:bg-[#111] rounded-[20px] p-6 w-[100%]'>
            <h2 className='text-2xl font-bold'>
              About Me
            </h2>
            <div className='my-8'>
              <p className="text-lg leading-relaxed">
                I'm a passionate Web Developer based in Navi Mumbai, India, with a strong background in WordPress development.
                Over the past few years, I’ve built responsive, user-friendly websites using WordPress, HTML, CSS, and PHP.
                My work has included CMS setup, theme customization, and creating visually appealing layouts using tools like Elementor.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Currently, I’m expanding my skills into modern technologies like <strong>React.js</strong> and strengthening my expertise in <strong>PHP</strong>.
                I'm learning to build dynamic, component-based web applications with React and create powerful backends with PHP and MySQL.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I love turning ideas into real solutions through clean and efficient code. My goal is to grow as a full stack developer and contribute to impactful, modern web projects.
              </p>
            </div>
            <h2 className='text-2xl font-bold'>
              What I do!
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">🔧 WordPress Development</h3>
                <p>
                  I specialize in building responsive websites using WordPress. From theme setup to content
                  management and plugin integration, I ensure every site is clean, user-friendly, and easy to manage.
                </p>
              </div>
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">🎨 UI Implementation</h3>
                <p>
                  Using tools like Elementor and WPBakery, I create visually appealing layouts that align with brand identity
                  while maintaining functionality and performance.
                </p>
              </div>
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">💻 Learning React & PHP</h3>
                <p>
                  I'm actively sharpening my skills in <strong>React.js</strong> and <strong>core PHP</strong> to build
                  dynamic, scalable web applications.
                </p>
              </div>
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">🚀 Performance Optimization</h3>
                <p>
                  Whether it’s improving load times or streamlining code, I ensure websites not only look great but also run
                  fast and efficiently.
                </p>
              </div>
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">🧩 Freelance Projects</h3>
                <p>
                  As a freelancer, I’ve managed complete website development cycles — from understanding client requirements
                  to final delivery.
                </p>
              </div>
              <div className='p-3 rounded-[15px] bg-orange-100 hover:bg-orange-300'>
                <h3 className="font-semibold text-xl py-3">📚 Continuous Learning & Skill Building</h3>
                  <p>
                    I'm committed to continuous growth. I regularly work on personal projects, follow the latest tech trends, and expand my skills in frontend and backend development.
                  </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home