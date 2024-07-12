import React from 'react'
import { Link } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/solid'
const Header = () => {
  return (
    <>
        <div className=' flex justify-between items-center py-2'>
            <Link className='w-2/12' to={'/'}>
                <img src="/assets/img/Logo.svg" className='size-20' alt="" />
            </Link>
           
            <nav  className=' w-8/12 flex gap-10 text-blue-900 justify-center font-medium'>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/nosotros'}>Nosotros</Link>
                <Link to={'/viajes'}>Viajes</Link>
                <Link to={'/testimoniales'}>Testimoniales</Link>
            </nav>
            <div className='w-2/12 flex justify-end'>
            <Link to={'/login'} className='w-fit flex gap-2 items-center bg-blue-50 px-4 py-2 rounded-md text-blue-900 font-medium'>
                <UserIcon className=' size-5'/>
                Iniciar Sesión
            </Link>
            </div>

        </div>
    </>
  )
}

export default Header