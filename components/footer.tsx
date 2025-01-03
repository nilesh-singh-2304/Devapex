import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4  md:p-8 lg:p-10">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img src="https://www.imgtr.net/ib/s5l2riCMd1UNZj5_1730748864.png" className='h-20' alt="" />    
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">Harnessing Talent Driving Innvation</p>
      {/* <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul> */}
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" className="hover:underline">StarkSeek™</a>. All Rights Reserved.</span>
      <p className='text-xs text-gray-500 mt-1 sm:text-center dark:text-gray-400'>Credits : Nilesh Singh</p>
  </div>
</footer>
  )
}

export default Footer
