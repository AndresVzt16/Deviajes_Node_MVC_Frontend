import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const AuthLayout = () => {
  return (
    <>
        <div className=' container mx-auto my-0'>
            <Header/>
            <div className=''>
                <Outlet/>
            </div>

        </div>
      
    </>
  )
}

export default AuthLayout