import React, { useEffect, useState } from 'react'
import clienteAxios from '../../config/axios'
import { CalendarDaysIcon, ClockIcon, UserGroupIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import formatearFH from '../helpers/formatearFH'
import Card from '../components/Card'
import AdminCard from '../components/AdminCard'

const AdminDashboard = () => {
    const [viajes, setViajes] = useState([])
    const[usuarios, setUsuario] = useState([])

    const obtenerViajes = async() => {
        try {
            const {data} = await clienteAxios.get('/viajes')
            setViajes(data)
            
        } catch (error) {
            
        }
    } 
    useEffect(()=> {
        obtenerViajes()
    },[])
  
  return (
    <div className=' bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 grid-cols-3 p-5'>
        <div className=' bg-white rounded-xl p-5'>
            <h3 className=' text-xl font-medium text-gray-500'>Viajes disponibles</h3>
            <div className='grid mt-5'>
                <AdminCard dato={viajes.length} descripcion={'N° total de viajes creados'} titulo='Viajes' />
            </div>
        </div>
        <div className='bg-white rounded-xl p-5'>
            <h3 className=' text-xl font-medium text-gray-500'>Mis boletos</h3>
            <AdminCard />
        </div>
        <div className=' bg-white rounded-xl p-5'>
            <h3 className=' text-xl font-medium text-gray-500'>Mis reseñas</h3>
        </div>
        <div className=' bg-white rounded-xl p-5'>
            <h3 className=' text-xl font-medium text-gray-500'>Mis reseñas</h3>
        </div>

    </div>
  )
}

export default AdminDashboard