import React, { useEffect, useState } from 'react'
import clienteAxios from '../../config/axios'
import Card from '../components/Card'
import useAuth from '../hooks/useAuth'
import Estadistica from '../components/Estadistica'

const Dashboard = () => {
    const [viajes, setViajes] = useState([])
    const { boletos, auth, autenticarUsuario, testimonialesUsuario } = useAuth()

    const obtenerViajes = async () => {
        try {
            const { data } = await clienteAxios.get('/viajes')
            setViajes(data)
        } catch (error) {
            console.error('Error al obtener los viajes:', error)
        }
    }

    useEffect(() => {
        autenticarUsuario()
        obtenerViajes()
    }, [])

    return (
        <div className='bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 md:grid-cols-2 p-5'>
            <div className='row-start-1 row-end-4 bg-white rounded-xl p-5'>
                <h4 className='text-xl mb-5 font-semibold text-gray-400'>Nuevos viajes disponibles</h4>
                <div className='animate-fade-right grid lg:grid-cols-2 gap-5'>
                    {viajes.slice(0, 4).map(viaje => (
                        <Card key={viaje.id} viaje={viaje} />
                    ))}
                </div>
            </div>
            <div className='bg-white rounded-xl p-5'>
                <h4 className='text-xl mb-5 font-semibold text-gray-400'>Estadísticas generales</h4>
                <div className='animate-fade-up grid lg:grid-cols-2 gap-10'>
                    <Estadistica link={'/usuario/testimoniales'} dato={testimonialesUsuario} titulo='Testimoniales' subindice='Publicados'/>
                    <Estadistica link={'/usuario/mis-viajes'} dato={boletos} titulo='Mis viajes' subindice='Adquiridos' />
                    <div className='col-start-1 col-end-3'>
                        <Estadistica link={'/usuario/testimoniales'} dato={boletos  } titulo='Comprados' subindice='Adquiridos'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
