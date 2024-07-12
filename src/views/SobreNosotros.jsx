import React from 'react'
import Nosotros from '../components/Nosotros'
import Aerolineas from '../components/Aerolineas'

const SobreNosotros = () => {
  return (
    <>
        <h2 className=' text-3xl w-full text-center my-5 font-medium text-blue-600'>SobreNosotros</h2>
        <Nosotros/>
        <Aerolineas/>
    </>

  )
}

export default SobreNosotros