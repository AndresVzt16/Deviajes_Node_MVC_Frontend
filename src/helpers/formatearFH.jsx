import React, { useEffect, useState } from 'react'

const formatearFH = ({tipo, data}) => {
  const[salida, setSalida] = useState('')
  useEffect(()=>{
    sacarFormato(tipo, data)
  },[])
  const sacarFormato = (tipo, data) => {
    const fecha = data.fecha_salida.split('T')[0]
    salida(fecha)
  }
  return (
    <p>{salida}</p>
  )
}

export default formatearFH