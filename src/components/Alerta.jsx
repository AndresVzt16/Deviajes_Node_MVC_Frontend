import React, { useEffect, useState } from 'react'
import { InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const Alerta = ({ alerta }) => {
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)
  const [mostrarAlerta, setMostrarAlerta] = useState(true)

  useEffect(() => {
    if (alerta.msg) {
      setMsg(alerta.msg)
      setError(alerta.error)
      setMostrarAlerta(true)
    }
  }, [alerta])

  useEffect(() => {
    if (msg !== '') {
      setTimeout(() => {
        setMostrarAlerta(false)
        setTimeout(() => {
          setMsg('')
        }, 500)
      }, 2000)
    }
  }, [msg])

  return (
    <div className={`${error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"} ${mostrarAlerta ? "animate-jump-in" : "animate-jump-out" } ${msg === ''? "hidden": "flex"} items-center justify-center text-sm px-5 gap-2  text-center my-5 rounded-xl w-full py-3`}>
      {
        error
          ? <InformationCircleIcon className='size-5' />
          : <CheckCircleIcon className='size-5' />
      }
      <p>{msg}</p>
    </div>
  )
}

export default Alerta
