import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Adm = ({course}: any) => {
    const [name, setname] = useState('')
    const [date, setdate] = useState('')
    const [venue, setvenue] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [link, setlink] = useState('')
    const router = useRouter();
    console.log(course)

    const handleChange = (e: any) => {
        if (e.target.name === 'name') {
            setname(e.target.value)
        }
        if (e.target.name === 'date') {
            setdate(e.target.value)
        }
        if (e.target.name === 'venue') {
            setvenue(e.target.value)
        }
        if (e.target.name === 'imgurl') {
            setimgurl(e.target.value)
        }
        if (e.target.name === 'link') {
            setlink(e.target.value)
        }
    }

    const handleSubmit = async() => {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/addeve`, {
          name : name,
          date : date,
          venue : venue,
          imgurl : imgurl,
          link : link
        }
      )
    
      console.log(res.data)
            if(res.data.success){
                toast.success('🦄 Wow so easy!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            }
            else{
                toast.error('🦄 Wow so easy!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            }
    
            setname('')
            setdate('')
            setvenue('')
            setimgurl('')
            setlink('')
    
            setTimeout(() => {
                router.reload()
            }, 3000);
      }

  return (
    <div>
      <div className="w-full flex justify-center items-center">
      <div className="join">
  <button className="btn join-item">Button</button>
  <button className="btn join-item">Button</button>
  <button className="btn join-item">Button</button>
</div>
      </div>

      <div className="w-full flex justify-center items-center">
      <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
            <div className="w-full flex justify-center items-center mt-10">
            <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
           
            {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn btn-wide btn-success">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    

<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={name} onChange={handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={date} onChange={handleChange} type="text" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input   value={venue} onChange={handleChange} type="text" name="venue" id="venue" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="venue" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Venue</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={imgurl} onChange={handleChange} type="text" name="imgurl" id="imgurl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="imgurl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={link} onChange={handleChange} type="text" name="link" id="link" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="link" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link</label>
    </div>
  </div>
  
</form>

    <div className="modal-action">
    <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
            </div>
            </div>
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {course.map((event : any) => (
                <tr key={event._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {event.name}
                </th>
                <td className="px-6 py-4">
                    {event.date}
                </td>
                <td className="px-6 py-4">
                    {event.venue}
                </td>
                <td className="px-6 py-4">
                    {event.imgurl}
                </td>
                <td className="px-6 py-4 text-right">
                    <Link href={event.link} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link</Link>
                </td>
            </tr>
            
            ))}
        </tbody>
    </table>
</div>

        </div>
      </div>
      </div>
      </div>
    </div>
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

export default Adm
