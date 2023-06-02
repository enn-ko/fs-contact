import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Component/Contacts'
import Create from './Component/Create'
import Edit from './Component/Edit'

const App = () => {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Contacts/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App