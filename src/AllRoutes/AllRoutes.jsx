import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MyApp from '../Components/MyApp'
import SignupForm from '../Components/SignupForm'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MyApp/>}/>
      <Route path='/signup' element={<SignupForm/>} />
    </Routes>
  )
}

export default AllRoutes
