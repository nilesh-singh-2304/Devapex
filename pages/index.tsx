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
        Harnessing Talent Driving Innvation
        </p>

        
        <div className="mt-5 max-w-full text-6xl md:text-9xl  font-bold items-center justify-center">
          StarkSeek
        </div>
        
        
        <div className="mt-8 gap-3 flex justify-center">
          <Link href={'/join'} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Contact us
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="/events">
            
            Our Events
          </Link>
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
                            {/* <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6> */}
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
                        className="s w-full h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                        <img className=" w-full h-full rounded-3xl"
                            src="https://www.imgtr.net/ib/vVm7z7BMBdRSOv3_1730835399.jpg" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className=" px-4 py-12 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-100 sm:text-4xl text-2xl font-extrabold text-center mb-12">Our Key Features</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-1 max-md:max-w-2xl mx-auto gap-8">
          <div className="p-6 bg-white rounded-lg text-left shadow">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Hackathons & Events</h3>
            <p className="text-gray-500 text-sm">Creating impactful experiences for students to showcase their talents and learn from the best</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
            <h3 className="text-white text-xl font-bold mb-4">Workshops & Mentorship</h3>
            <p className="text-sm text-white">Guided programs in AI, Cybersecurity, Web Development, and more, led by industry professionals</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-white text-white mt-6 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-white rounded-lg text-left shadow">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Patent & Startup Support</h3>
            <p className="text-gray-500 text-sm">Resources and mentorship for filing patents and kickstarting student-led ventures.</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
            <h3 className="text-white text-xl font-bold mb-4">Internship & Placement Drives</h3>
            <p className="text-sm text-white">Connecting students directly with top-tier companies for exclusive internship and career oppo</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-white text-white mt-6 rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </div>


    <div className=" px-4 py-12 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-100 sm:text-4xl text-2xl text-center font-extrabold  mb-12">Our Services</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-1 max-md:max-w-2xl mx-auto gap-8">
          <div className="p-6 bg-white rounded-lg text-left shadow">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Hackathons & Competitions</h3>
            <p className="text-gray-500 text-sm">Hands-on experience with coding and problem-solving in a competitive setting. Partnered with companies like Google, Microsoft, and Adobe</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
            <h3 className="text-white text-xl font-bold mb-4">Workshop Series</h3>
            <p className="text-sm text-white">Year-round workshops focused on relevant tech skills and trends, from AI to Blockchain.</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-white text-white mt-6 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-white rounded-lg text-left shadow">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Patent Support</h3>
            <p className="text-gray-500 text-sm">Guidance and resources to help students protect their innovations</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-blue-500 text-blue-500 mt-8 rounded-lg">Read More</button>
          </div>

          <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
            <h3 className="text-white text-xl font-bold mb-4">Career Development</h3>
            <p className="text-sm text-white">Internships, networking, and skill-building events designed to get students industry-ready</p>
            <button className="text-sm bg-transparent px-4 py-2 border border-white text-white mt-6 rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </div>
    {/* //corousal */}

    

        {/* //courses */}

         <div className=" px-4 py-10 font-[sans-serif]">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-50">Our Events</h2>
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


    <section className="">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Our Sponsors</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
                       <img src="https://pngimg.com/d/red_bull_PNG10.png" alt="" />               
            </a>
            <a href="#" className="flex justify-center items-center">
                <svg className="h-9 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 86 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z" fill="currentColor"/>
                </svg>                                               
            </a>
            <a href="#" className="flex justify-center items-center">
                <svg className="h-8 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 151 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3753_27919)"><path d="M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z" fill="currentColor"/></g><defs><clipPath id="clip0_3753_27919"><rect width="150" height="32.8125" fill="white" transform="translate(0.0820312 0.835449)"/></clipPath></defs>
                </svg>                                                                 
            </a>

            <a href="#" className="flex justify-center items-center">
                      <img src="https://www.mac-group.com/wp-content/uploads/2018/02/hp.png" alt="" />                                                                          
            </a>
            <a href="#" className="flex justify-center items-center">
                   <img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png" alt="" />                                                                              
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-adobe-404px-grey.png" alt="" />                                                                                  
            </a>
        </div>
        <div className="grid grid-cols-2 mt-10 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
                       <img src="https://reskilll.com/newui/img/whitelogo.png" alt="" />               
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://www.imgtr.net/ib/Z7kUkHgy97cRbCQ_1730837011.png" height={300} width={300} alt="" />                                             
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://pbs.twimg.com/profile_images/1767173755170881536/Xmxo9hCb_400x400.jpg" alt="" />                                                            
            </a>

            <a href="#" className="flex justify-center items-center">
                      <img src="https://www.delhicapitals.in/static-assets/images/clients/mens/dream-11.png?v=1.19" alt="" />                                                                          
            </a>
            <a href="#" className="flex justify-center items-center">
                   <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/360px-Delhi_Capitals.svg.png" alt="" />                                                                              
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/16225006/Rajasthan-Royals-Logo-500x281.png" height={500} width={500} alt="" />                                                                                  
            </a>
        </div>
    </div>
</section>


<section className="">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Our College Partners</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="hidden md:flex justify-center items-center">
                       {/* <img src="https://pngimg.com/d/red_bull_PNG10.png" alt="" />                */}
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" alt="" />                                              
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://seeklogo.com/images/I/indian-institute-of-technology-delhi-logo-CDE3FA8BD3-seeklogo.com.png" alt="" />                                                              
            </a>

            <a href="#" className="flex justify-center items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Mnit_logo.png" alt="" />                                                                          
            </a>
            <a href="#" className="flex justify-center items-center">
                   <img className="scale-125 md:scale-150 md:ml-16" src="https://collegedehradun.com/images/Dev-Bhoomi-Logo.png" height={400} width={400} alt="" />                                                                              
            </a>
            <a href="#" className="hidden md:flex justify-center items-center">
                {/* <img src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-adobe-404px-grey.png" alt="" />                                                                                   */}
            </a>
        </div>
    </div>
</section>


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
