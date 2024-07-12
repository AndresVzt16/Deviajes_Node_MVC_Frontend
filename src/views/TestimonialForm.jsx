import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Ticket from '../components/Ticket'
import Alerta from '../components/Alerta'
import { useNavigate } from 'react-router-dom'

const TestimonialForm = () => {
  const { boletos, publicarTestimonial, editarTestimonial, boleto, setBoleto } = useAuth()
  const params = useParams()
  const { id } = params
  const [searchParams] = useSearchParams()
  const isEdit = searchParams.get('edit') === 'true'
  const idTestimonial = searchParams.get('id')
  const navigate = useNavigate()
  const [ticket, setTicket] = useState({})
  const [mensaje, setMensaje] = useState('')
  const [calificacion, setCalificacion] = useState('')
  const [alerta, setAlerta] = useState({})
  const [testimonial, setTestimonial] = useState({})

  useEffect(() => {
    if (boletos.length > 0) {
      obtenerBoleto(id)
    }
  }, [boletos])

  useEffect(() => {
    if (boleto.id) {
      generarTicket()
      if (isEdit) {
        // Simula obtener el testimonio del boleto (ajusta esto según tu lógica real)
        const testimonioExistente = testimonial // Supongamos que tienes un objeto testimonio en el boleto
        setMensaje(testimonioExistente?.mensaje || '')
        setCalificacion(testimonioExistente?.calificacion || '')
      }
    }
  }, [boleto, isEdit])

  const generarTicket = () => {
    const { clase, usuario, viaje, id, precio } = boleto
    const { destino } = viaje
    const ticketGenerado = {
      id,
      nombre: destino.nombre,
      pais: destino.pais,
      precio,
      idDestino: destino.id,
      claseId: clase.id,
      salida: viaje.fecha_salida
    }
    setTicket(ticketGenerado)
  }

  const obtenerBoleto = (id) => {
    const boletoUsuario = boletos.find(boleto => boleto.id === id)
    setBoleto(boletoUsuario)
  }

  const handleCalificacion = (e, calificacion) => {
    e.preventDefault()
    setCalificacion(calificacion)
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    if ([mensaje, calificacion].includes('')) {
      setAlerta({ msg: "Hay campos vacíos, verifica e inténtalo de nuevo", error: true })
      return
    }
    try {
      const destino = boleto.viaje.id
      
      if (!isEdit) {
        await publicarTestimonial(destino, mensaje, calificacion, boleto.id)
        setAlerta({ msg: "Tu publicación se creó exitosamente" })
        setTimeout(() => {
          navigate('/usuario/mis-testimoniales')
        }, 1000);
      } else {
        await editarTestimonial(idTestimonial, mensaje, calificacion)
        setAlerta({ msg: "Tu publicación se editó exitosamente" })
        setTimeout(() => {
          navigate('/usuario/mis-testimoniales')
        }, 1000);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 md:grid-cols-2 p-5'>
      <div className='bg-white rounded-xl p-5'>
        <h4 className='text-xl mb-5 font-semibold text-gray-400'>Viaje Realizado</h4>
        <div className='animate-fade-right grid'>
          <Ticket ticket={ticket} tipo={'Calificando'} />
        </div>
      </div>
      <div className='bg-white rounded-xl p-5'>
        <h4 className='text-xl mb-5 font-semibold text-gray-400'>Mi reseña</h4>
        <Alerta alerta={alerta} />
        <div className='animate-fade-up grid gap-10'>
          <form onSubmit={handleSumbit}>
            <div className=''>
              <label className='block w-full text-gray-500' htmlFor="">Mensaje</label>
              <textarea
                placeholder="Escribe aquí..."
                rows="5"
                cols="50"
                className='p-3 rounded-xl mt-2 w-full border'
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
              />
            </div>
            <div className='my-5'>
              <label className='block w-full text-gray-500' htmlFor="">Calificación</label>
              <p className='text-sm text-gray-400'>Por favor califica tu viaje en una escala del 1 al 5. Donde 1 es el mínimo y 5 es el máximo.</p>
              <ol className='flex gap-1 mt-5'>
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    onClick={e => handleCalificacion(e, num)}
                    className={`${calificacion === num ? "bg-blue-600 text-white" : "bg-white text-gray-500"} transition-all border size-14 flex items-center justify-center rounded-md`}
                  >
                    {num}
                  </button>
                ))}
              </ol>
            </div>
            <button className='bg-blue-600 w-full py-2 rounded-md text-white'>
              {isEdit ? "Editar reseña" : "Enviar reseña"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TestimonialForm
