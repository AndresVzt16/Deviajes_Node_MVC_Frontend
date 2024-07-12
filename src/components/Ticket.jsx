import { CalendarDaysIcon, ClockIcon, UserIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "./Alerta";
import QRCodeGenerator from "./GenQR";


const Ticket = ({ ticket , tipo}) => {
  const [datos, setDatos] = useState({});
  const{auth, realizarCompra} = useAuth()
  const[alerta, setAlerta] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (ticket.id) {
      setDatos(ticket);
    }
  }, [ticket]);

  const handleComprar = async e => {
    e.preventDefault();
    if(!datos.id){
        setAlerta({msg:'No hay datos disponibles'})
        return;
    }
    const viaje = datos.id
    const clase = datos.claseId
    await realizarCompra(ticket)
    setAlerta({msg:"Tu compra se realizo exitosamente"})
    setTimeout(() => {
        navigate('/usuario/mis-viajes')
    }, 3000)
    
    
  }

  return (
    <div className=" border border-gray-100 bg-gradient-to-r h-full from-white to-gray-100 shadow-lg px-5 flex flex-col items-center py-3 rounded-xl">
      {datos.id && (
        <>
        <div className=" relative animate-fade-left w-full border h-full bg-gradient-to-r from-gray-900 to-gray-950 shadow-lg px-5 text-white py-3 rounded-xl">
          <h4 className="  uppercase text-3xl font-semibold">
            {datos.nombre} - {datos.pais}
          </h4>
          <p className=" border-t border-b border-t-gray-600 border-b-gray-600 py-2 my-3 text-xl text-gray-200">{datos.aerolinea}</p>
          <div className=" ">
            <div className=" flex text-sm items-center mb-3 gap-2">
              <CalendarDaysIcon className=" size-5" />
              <p>{datos.salida.split("T")[0]}</p>
            </div>
            <div className=" flex text-sm items-center my-3 gap-2">
              <ClockIcon className=" size-5" />
              <p>{datos.salida.split("T")[1].split(".")[0]}</p>
            </div>
            <div className=" flex text-sm items-center mb-3 gap-2">
              <UserIcon className=" size-5" />
              <p className=" uppercase ">{auth.nombre}</p>
            </div>
            
            <div className="flex justify-between flex-wrap gap-2">
                <div className=" flex text-sm items-center mb-3 gap-2">
                    <p className=" text-4xl">${datos.precio}<span className=" text-sm">/usd</span></p>
                </div>
                <div className=" md:w-full flex text-sm items-center justify-center mb-3 gap-2">
                    <p className=" text-4xl text-center w-full">{datos.clase}</p>
                </div>
            </div>
            <div className=" flex justify-center">
            {tipo === 'Comprado' ? 
              <QRCodeGenerator value={datos.id}/>:
              null
            }
            </div>

            <div className=" absolute size-10 rounded-l-full bg-gray-200 right-0 top-1/4">

            </div>

          </div>
          
        </div>
        {tipo === 'Comprando'?(
            <>
                    <Alerta alerta={alerta}/>
                    <button onClick={e => handleComprar(e)} className=" w-full bg-blue-600 py-2 rounded-md mt-5 text-white">Confirmar compra</button>
            </>
        )
        :
        tipo === "Calificando" ? null:
        
        <Link to={`/usuario/calificar/${ticket.id}`} className=" w-full bg-blue-600 py-2 text-center rounded-md mt-5 text-white">Calificar viaje</Link>}


        </>
        
        

      )}
    </div>
  );
};

export default Ticket;
