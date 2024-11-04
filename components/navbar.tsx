import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <div className="navbar mb-0 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/events"}>Events</Link></li>
      {/* <li><Link href={"/team"}>Our Team</Link></li> */}
      {/* <li><Link href={"/services"}>Services</Link></li> */}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">{`<DevApexIndia>`}</a> */}
   <Link href={"/"} className="btn btn-ghost text-xl"> <img src="https://www.imgtr.net/ib/s5l2riCMd1UNZj5_1730748864.png" alt="" height={100} width={100} /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/events"}>Events</Link></li>
      {/* <li><Link href={"/team"}>Our Team</Link></li> */}
      {/* <li><Link href={"/services"}>Services</Link></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={'/join'} className="btn">Contact us</Link>
  </div>
</div>
    </div>
  )
}

export default Nav
