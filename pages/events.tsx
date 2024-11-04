import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Events = ({course}: any) => {
  return (
    <>
    <div className="bg-[url('https://64.media.tumblr.com/4e9baec5f243fb9fe8b7ba75c70f51cf/tumblr_inline_nohxl1PLTa1ro20i7_540.gif')] mt-0 bg-fixed bg-cover">
    <div className="relative overflow-hidden ">
  
  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
  <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-400/50 dark:to-blue-900"></div>
  <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-blue-900/70 dark:via-blue-900/70 dark:to-blue-500/70"></div>
</div>


<div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Ultimate Coding Hub 
        </p>

        
        <div className="mt-5 max-w-full text-9xl font-bold items-center justify-center">
          StarkSeek
        </div>

        
        <div className="mt-8 gap-3 flex justify-center">
          <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Contact us
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            
            Our Events
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>

<div className="p-4 font-[sans-serif]">
    <div className="max-w-7xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
      <div className="max-w-md mx-auto">
        {/* <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">Stay updated with the latest blog posts.</h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {course.map((item: any) => (
          <div key={item._id} className="bg-gray-500 cursor-pointer rounded overflow-hidden group">
          <div className="relative overflow-hidden">
            <img src={item.imgurl} alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
            <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">{item.date}</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{item.name} , {item.venue}</h3>
            <Link href={item.link}><button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Know More</button></Link>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  </div>
    </div>
    </>
  )
}


export async function getServerSideProps() {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/addeve`)

  const course = res.data.data
  console.log(course)
return {
  props: {course : JSON.parse(JSON.stringify(course))},
};
}

export default Events
