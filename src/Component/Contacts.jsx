import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

const Contacts = () => {
    const [contacts,setContacts] = useState([])
    const getContacts = async ()=>{
        const {data} = await axios.get(' http://localhost:3000/contacts')
        // console.log(data);
        setContacts(data)
    }

    const apiContactDelete = async (id) =>{
        const {data} = await axios.delete(`http://localhost:3000/contacts/${id}`)
        getContacts()
    }

    useEffect(()=>{
        getContacts()
    },[])
  return (
    <div className='container p-5 mx-auto'>
        <Link to={'/create'} className='p-5'>
            <button className='bg-gray-50 dark:bg-gray-800 py-3 px-6 rounded text-white'>Create Contacts</button>
        </Link>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 border-2 mt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Active
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    contacts?.map(contact=>(
                        <tr key={contact.id} className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {contact.id}
                        </th>
                        <td className="px-6 py-4 ttext-transform: capitalize">
                            {contact.name}
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {contact.email}
                        </td>
                        <td className="px-6 py-4">
                            {contact.phone}
                        </td>
                        <td className="px-6 py-4 flex" >
                           <Link to={`/edit/${contact.id}`}>
                             <FiEdit className='text-blue-500 mr-3 text-2xl cursor-pointer'/>
                           </Link>
                             <AiOutlineDelete className='text-red-500 text-2xl cursor-pointer' onClick={()=> apiContactDelete(contact.id)}/>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Contacts