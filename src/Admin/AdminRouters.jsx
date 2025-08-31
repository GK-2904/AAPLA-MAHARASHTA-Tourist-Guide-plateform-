import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import DataRead from '../Admin/DataRead'
import DataUpdate from '../Admin/DataUpdate'
import Create from './Create'

const AdminRouters = () => {

  return (

    <BrowserRouter>

    <Routes>
    <Route path='/' element={<AdminDashboard/>} />
    <Route path='/read/:id' element={<DataRead/>}/>
    <Route path='/update/:id' element={<DataUpdate/>}/>
    <Route path='/create' element={<Create/>} />

    </Routes>
    
    
    </BrowserRouter>
    
  )
}

export default AdminRouters