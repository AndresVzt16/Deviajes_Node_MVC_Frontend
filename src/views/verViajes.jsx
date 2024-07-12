import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import useAuth from '../hooks/useAuth'
const VerViajes = ({limite}) => {
    const{obtenerViajes, viajes} = useAuth()
    
   


    useEffect(()=> {
        obtenerViajes()
    },[])
  return (
    <div className=' bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 md p-5'>
        <div className=' row-start-1 row-end-4 bg-white rounded-xl p-5'>
            <h4 className=' text-xl mb-5 font-semibold text-gray-400'>Viajes disponibles</h4>
            <div className=' animate-fade-up grid md:grid-cols-3 lg:grid-cols-4 gap-10  '>
                {viajes.map(viaje => (
                    <Card key={viaje.id} viaje={viaje}/>
                ))}
           

            </div>
        </div>

    </div>
  )
}

export default VerViajes