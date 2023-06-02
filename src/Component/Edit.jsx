import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {AiFillPhone} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edite = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')

  const getApiUpdateContact = async()=>{
    const {data} = await axios.get(`http://localhost:3000/contacts/${id}`)
    console.log(data);
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
  }
  const updateContact =async(contact)=>{
    const {data} = await axios.put(`http://localhost:3000/contacts/${id}`,contact)
    navigate('/')
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const contact = {name,email,phone}
    updateContact(contact)
  }
  useEffect(()=>{
    getApiUpdateContact()
  },[])
  return (
    <form 
    onSubmit={handleSubmit} 
    action="" 
    className='mx-auto rounded mt-20 w-96 py-5 border-2 shadow-lg p-5'>
    <h1 className=' text-gray-700 text-2xl font-bold text-center'>Update Contact</h1>
  <div className=''>

    {/* <----user name input----> */}
    <label htmlFor="website-admin" 
    className="block mb-2 text-sm 
    font-medium text-gray-900 
    dark:text-white">
      Username
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <span className="inline-flex items-center 
      text-sm text-gray-900 border
      border-r-0 border-gray-300 
      rounded-l-md dark:bg-gray-600 
      dark:text-gray-400 dark:border-gray-600">
        @
      </span>
      </div>
      <input 
      onChange={(e)=>{setName(e.target.value)}} 
      value={name}
      type="text" 
      id="email-address-icon" 
      className="bg-gray-50 border border-gray-300
       text-gray-900 text-sm rounded-lg 
       focus:ring-blue-500 focus:border-blue-500 
       block w-full pl-10 p-2.5  dark:bg-gray-700 
       dark:border-gray-600 dark:placeholder-gray-400 
       dark:text-white dark:focus:ring-blue-500 
       text-transform: capitalize
       dark:focus:border-blue-500" 
       placeholder="Bonny Crew"/>
    </div>

    {/* <----email address input----> */}
    <label htmlFor="email-address-icon" 
    className="block mb-2 text-sm
     font-medium text-gray-900 
     dark:text-white">
      Your Email
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true"
         className="w-5 h-5 text-gray-500 dark:text-gray-400"
         fill="currentColor" 
         viewBox="0 0 20 20" 
         xmlns="http://www.w3.org/2000/svg">
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
      </div>
      <input 
      onChange={(e)=>{setEmail(e.target.value)}} 
      value={email}
      type="text" id="email-address-icon" 
      className="bg-gray-50 border border-gray-300 t
      ext-gray-900 text-sm rounded-lg focus:ring-blue-500 
      focus:border-blue-500 block w-full pl-10 p-2.5  
      dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="name@flowbite.com"/>
    </div>

    {/* <-----phone input----> */}
    <label htmlFor="phone-number" 
      className="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">
      Your Email
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiFillPhone className='text-gray-200' aria-hidden='phone icon'/>
      </div>
      <input 
       onChange={(e)=>{setPhone(e.target.value)}} 
       value={phone}
       type="text" id="email-address-icon"
       className="bg-gray-50 border border-gray-300 
       text-gray-900 text-sm rounded-lg focus:ring-blue-500 
       focus:border-blue-500 block w-full pl-10 p-2.5  
       dark:bg-gray-700 dark:border-gray-600 
       dark:placeholder-gray-400 dark:text-white 
       dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="0913795739"/>
    </div>

    <div className='mt-5'>
      <button className='bg-green-500 
      hover:bg-green-400 
      rounded mr-3 text-white py-2 px-3' 
      type='submit'
      >
        update
      </button>
      <Link to={'/'}>
        <button className='bg-red-500 rounded text-white py-2 px-3 hover:bg-red-400'>
          cancel
        </button>  
      </Link>
    </div>
  </div>

  </form>
  )
}

export default Edite