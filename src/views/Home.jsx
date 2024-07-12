import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nosotros from '../components/Nosotros'
import Card from '../components/Card'
import useAuth from '../hooks/useAuth'
import Testimonial from '../components/Testimonial'
import Aerolineas from '../components/Aerolineas'
const Home = () => {
  const{obtenerViajes, viajes, testimonialesGeneral} = useAuth()

  return (
    <>
        <div className="relative h-[90vh] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/img/d-11.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10  flex-col flex items-center justify-center h-full text-white">
                <h1 className=" animate-fade-right h-fit text-6xl inline-block font-semibold leading-relaxed  md:w-2/3 text-center">Explora el mundo, vuela hacia tus sueños</h1>
                <p className=' animate-fade-left h-fit inline-block w-2/3 text-center my-5 text-2xl'>Tu viaje comienza aquí. ¡Descubre, vuela, disfruta</p>
                <Link to={'/viajes'} className=' animate-fade bg-white text-blue-900 px-10 py-2 text-lg my-5 text-center font-semibold rounded-full'>Ver viajes</Link>
            </div>
        </div>
        <Aerolineas/>
        <h2 className=' w-full  text-4xl  text-gray-900 font-medium mt-20 mb-10'>Sobre nosotros</h2>
        <Nosotros vista={'Home'}/>
        <h2 className=' w-full  text-4xl text-center  text-gray-900 font-medium mt-20 mb-10'>Nuestros viajes mas solicitados</h2>
        <div className='animate-fade-right grid lg:grid-cols-4 mt-20 gap-10'>
            {viajes.slice(0, 4).map(viaje => (
                <Card key={viaje.id} viaje={viaje} />
            ))}
        </div>
        <div>
          <h2 className=' w-full  text-4xl text-center  text-gray-900 font-medium mt-20 mb-10'>Testimoniales</h2>
          <div className='animate-fade-right grid lg:grid-cols-4 mt-20 gap-10'>
              {testimonialesGeneral.slice(0, 4).map(testimonial => (
                  <Testimonial key={testimonial.id} tipo={'vista'} testimonial={testimonial} />
              ))}
          </div>
        </div>


    </>
  )
}

export default Home