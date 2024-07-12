import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nosotros = ({vista}) => {

    useEffect(()=> {

    },[])
  return (
    <div className=' flex gap-20 items-center'> 
        <img src="/assets/img/francia.jpg" className=' rounded-xl w-5/12 h-full' alt="" />
        {vista === "Home"? 
        <p className=' text-lg  leading-loose font-normal  text-gray-600'>
        En nuestra agencia de viajes, nos dedicamos a transformar tus sueños en experiencias tangibles y memorables. Con una pasión innata por explorar el mundo y un compromiso firme con la excelencia en el servicio, hemos dedicado años a perfeccionar cada aspecto de la planificación de viajes. Nuestro equipo está compuesto por expertos en destinos de todo el mundo, listos para brindarte asesoramiento personalizado y soluciones adaptadas a tus necesidades específicas. <Link to={'/nosotros'} className=' text-blue-500 underline'>Ver mas</Link>
        </p>
        :
        <>
        <div>
        <p className='text-lg  leading-loose font-normal  text-gray-600'>
        En nuestra agencia de viajes, nos dedicamos a transformar tus sueños en experiencias tangibles y memorables. Con una pasión innata por explorar el mundo y un compromiso firme con la excelencia en el servicio, hemos dedicado años a perfeccionar cada aspecto de la planificación de viajes. Nos enorgullece decir que cada itinerario que diseñamos es una obra maestra, cuidadosamente elaborada para garantizar que cada detalle, por pequeño que sea, contribuya a una experiencia única e inolvidable.
        </p>
        <p className=' mt-10 text-lg  leading-loose font-normal  text-gray-600'>
        Nuestro equipo está compuesto por expertos en destinos de todo el mundo, cada uno con un profundo conocimiento y una amplia experiencia en las regiones que cubren. Ya sea que desees un retiro tranquilo en una playa paradisíaca, una aventura emocionante en las montañas, una inmersión cultural en ciudades históricas o un viaje de lujo a los lugares más exclusivos del planeta, estamos aquí para hacer realidad tus deseos.
        </p>
        </div>

        </>
        
    }
        
    </div>
  )
}

export default Nosotros