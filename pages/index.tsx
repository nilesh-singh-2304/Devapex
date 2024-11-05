import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({course}: any) {
  return (
    <div className="bg-[url('https://64.media.tumblr.com/4e9baec5f243fb9fe8b7ba75c70f51cf/tumblr_inline_nohxl1PLTa1ro20i7_540.gif')] mt-0 bg-fixed bg-cover">
      
      <div className="px-2 md:px-0">
        <div>
        
<div className="relative overflow-hidden">
  
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

        
        <div className="mt-5 max-w-full text-6xl md:text-9xl  font-bold items-center justify-center">
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

        </div>
      {/* <div className="font-sans max-w-7xl max-md:max-w-md mx-auto">
      <div className="grid md:ml-16 md:grid-cols-2 mt-5 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center mt-8 z-50 relative">
          <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"><span className="text-blue-600">Smart</span> Business with <span className="text-blue-600">Smart</span> People</h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>

          <button type='button'
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Get Started</button>

          <div className="mt-12">
            <div className="grid sm:grid-cols-3 gap-4 items-center">
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">10+</h5>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">890</h5>
                <p className="text-gray-600">Cases Solved</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">250</h5>
                <p className="text-gray-600">Business Partners</p>
              </div>
            </div>
          </div>
        </div>

        <img src="https://www.stellarisvp.com/wp-content/uploads/2022/11/Mar2019_blog_Edtech.png" className="rounded-md lg:w-4/5 mb-8 z-50 relative" alt="Dining Experience" />
      </div>

      <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
        <div className="bg-white p-6 shadow rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 32 32">
            <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
            <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
          </svg>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Customization</h3>
          <p className="text-sm text-gray-600">Tailor our product to suit your needs.</p>
          <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 512.001 512.001">
            <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
          </svg>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Support</h3>
          <p className="text-sm text-gray-600">24/7 customer support for all your inquiries.</p>
          <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 24 24">
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
              <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
              <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
            </g>
          </svg>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Performance</h3>
          <p className="text-sm text-gray-600">Experience blazing-fast performance with our product.</p>
          <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
        </div>
      </div>
    </div> */}


<div className="">
  <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    <h1 className="font-semibold text-white text-lg md:text-5xl">
      <span className="text-[#ff0] ">StarkSeek:</span>  Harnessing Talent Driving Innvation

    </h1>
    <div className="w-auto">
      <p className="mt-5 text-neutral-300 text-sm md:text-lg">
      StarkSeek is a multifaceted organization committed to bridging academia, industry, and innovation through impactful events, software solutions, and professional development opportunities. With a mission to support students, institutions, and businesses alike, StarkSeek delivers a range of services across domains, including:

Tech Events and Hackathons: Organized in collaboration with leading companies like Google, Microsoft, and Adobe, our events create unique learning and networking opportunities that prepare students and early professionals for the future of work.
      </p>
    </div>
  </div>
</div>

<section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                
                <div
                    className="w-full justify-center pt-5 items-center">
                    <img className="sm:ml-0 ml-auto rounded-xl" src="https://www.imgtr.net/ib/7IhnL0tPNI7YlUO_1730751045.jpg"
                        height={800} width={800} alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-blue-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Who we are ?</h2>
                            <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                            StarkSeek is a pioneer in organizing global hackathons, workshops, and tech events designed to empower students and bridge academia with the industry.

We collaborate with some of the top tech companies like Google, Microsoft, and Adobe to provide students with real-world skills and opportunities.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    className="text-blue-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    What our vision is ?</h2>
                                <p
                                    className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                                    To empower students and institutions through global hackathons, workshops, and tech events, bridging the gap between academia and industry with unparalleled learning opportunities.

To be a catalyst for innovation and growth, enabling students and colleges across India to connect, collaborate, and thrive in the tech world
</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                        <span
                            className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                            More</span>
                        <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="w-full lg:justify-start justify-center items-start flex">
                    <div
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                        <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl"
                            src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
    <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
                
                <h2 className="text-4xl text-center font-bold text-blue-600 py-5">
                     Features & Perks 
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Ready to take your coding career to the next level? Join StarkSeek today and unlock a world of
possibilities. Sign up to access our resources, connect with our community, and start your journey
towards excellence in coding.
                </p>
            </div>
            <div
                className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                        <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-blue-600 mb-3 capitalize">
                        Career Resources
                    </h4>
                    <p className="text-sm font-normal text-gray-300">
                    Access to top-tier coding resources .
                     Exclusive content and tutorials
                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                        <svg className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                stroke="" stroke-width="2"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-blue-600 mb-3 capitalize">
                        Industry Projects
                    </h4>
                    <p className="text-sm font-normal text-gray-300">
                     Participation in community projects and make industry level projects

                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                        <svg className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                                stroke="" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-blue-600 mb-3 capitalize">
                       Events & Networking
                    </h4>
                    <p className="text-sm font-normal text-gray-300">
                     Invitations to IEEE India and global tech events.
                     Networking with industry leaders
                    </p>
                </div>
                <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                    <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                        <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                                stroke="" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-blue-600 mb-3 capitalize">
                        Placement Support
                    </h4>
                    <p className="text-sm font-normal text-gray-300">
                    Career development support and job placement opportunities
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-14 text-center">
                  
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                  <div className="relative w-full h-auto md:col-span-2">
                      <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
                          <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                              
                              <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                              Events at Microsoft and Google Offices
                              </h3>
                              <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64"> As a StarkSeek member, you have the opportunity to attend select events at these
prestigious offices. These events provide unparalleled exposure to cutting-edge technology, industry
insights, and the chance to connect with top professionals in the field </p>
                              
                          </div>
                          <div className="relative hidden h-auto md:w-1/2 md:block">
                              <img src="https://pagedone.io/asset/uploads/1695028873.png" alt="Header tailwind Section" className="h-full ml-auto"/>
                          </div>
                      </div>
                  </div>
                  <div className="relative w-full h-auto">
                      <div className="bg-blue-800 rounded-2xl p-5  xl:p-8 h-full">
                          <div className="block">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                                  </svg>                                
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Collaborate with Like-Minded Individuals
                          </h3>
                          <p className="text-xs font-normal text-white mb-5">Join a vibrant community of developers who share your passion for coding. At StarkSeek,
collaboration is at the heart of what we do. Connect with peers, participate in coding challenges and work on open-source projects together. </p>
                          
                      </div>
                  </div>
                  <div className="relative w-full h-auto">
                      <div className="bg-cyan-600 rounded-2xl p-5 pb00 xl:p-8 h-full">
                          <div className="block">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                                  </svg>
                                                                 
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Build wealth with insurance planning</h3>
                          <p className="text-xs font-normal text-white ">Expand your professional network by attending our virtual and in-person events. From coding
bootcamps and hackathons to panel discussions and Q&A sessions with industry leaders, StarkSeek
offers countless opportunities to connect with fellow developers and potential mentors. </p>
                      </div>
                  </div>
              
              </div>
        </div>
    </section>

<div className="relative overflow-hidden pt-4 ">
  <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor"/>
    <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor"/>
  </svg>

</div>


  



    {/* //corousal */}

    

        {/* //courses */}

         <div className=" px-4 py-10 font-[sans-serif]">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-50">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {course.map((item : any) => (
            <div key={item._id} className="bg-gray-500 cursor-pointer rounded overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src={item.imgurl} alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">{item.date}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <Link href={item.link}><button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Know More</button></Link>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div> 


    {/* //testimonials */}

    </div>
    </div>
  );
}


export async function getServerSideProps() {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/addeve`)

  const course = res.data.data
  console.log(course)
return {
  props: {course : JSON.parse(JSON.stringify(course))},
};
}
