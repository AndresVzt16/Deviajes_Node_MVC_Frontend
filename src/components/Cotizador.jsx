import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  UserIcon,
  GlobeAmericasIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Alerta from "./Alerta";
const Cotizador = ({valorCotizado,setValorCotizado,setTicket}) => {
  const params = useParams();
  const { obtenerViaje, viaje, clases } = useAuth();
  const { id } = params;

  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [aerolinea, setAerolinea] = useState("");
  const [precio, setPrecio] = useState(0);
  const [salida, setSalida] = useState("");
  const [aeroEmail, setAeroEmail] = useState("");
  const [aeroTelf, setAeroTelf] = useState("");
  const [idDestino, setIdDestino] = useState("");
  const [idAerolinea, setIdAerolinea] = useState("");
  const [disponibles, setDispoibles] = useState("");
  const[clSeleccionada, setClSeleccionada] = useState('')
  const[alerta, setAlerta] = useState({})

  useEffect(() => {
    obtenerViaje(id);
  }, []);

  useEffect(() => {
    if (viaje.id) {
      setNombre(viaje.destino.nombre);
      setPais(viaje.destino.pais);
      setAerolinea(viaje.aerolinea.nombre);
      setPrecio(viaje.precio);
      setSalida(viaje.fecha_salida);
      setAeroEmail(viaje.aerolinea.email);
      setAeroTelf(viaje.aerolinea.telefono);
      setIdDestino(viaje.destinoId);
      setIdAerolinea(viaje.Aerolineaid);
      setDispoibles(viaje.disponibles);
    }
  }, [viaje]);
  const handleCotizar = (e) => {
    e.preventDefault();
    if(clSeleccionada === ''){
        setAlerta({msg:"Debes seleccionar una clase antes de continuar.", error: true})
        return
    }
   const{nombre: clase} = clSeleccionada
   let elevacion = 1
   if(clase === "Premium") {
    elevacion = 2
   }
   if(clase === "A") {
    elevacion = 1.7
   }
   if(clase === "B") {
    elevacion = 1.5
   }
   if(clase === "C") {
    elevacion = 1
   }
   setTicket({
    id,
    nombre,
    pais,
    aerolinea,
    precio: precio * elevacion,
    salida,
    idDestino,
    claseId: clSeleccionada.id,
    clase: clase
   })
    
  }
  return (
    <>
      
        <div className="borde bg-gradient-to-r animate-fade-right text-gray-700 from-white to-gray-50 shadow-lg px-5 rounded-xl py-3">
          <h4 className=" text-4xl font-semibold text-gray-700 my-5">
            {nombre} - {pais}
          </h4>
          <div className="flex items-center my-2 gap-1 text-sm  ">
            <UserGroupIcon className=" text-gray-300 size-5 " />
            <p>{disponibles} disponibles</p>
          </div>
          <div className="flex items-center my-2 gap-1 text-4xl font-medium">
            <p className=" text-blue-500">
              ${precio}
              <span className="text-sm "> / base</span>
            </p>
          </div>

          <div className=" flex justify-between">
            <div className="flex items-center my-2 gap-1 text-sm  ">
              <CalendarDaysIcon className=" text-gray-300 size-5 " />
              {salida.split("T")[0]}
            </div>
          </div>
          <div className=" border-t mt-5 py-3">
            <h4 className=" mt-2 text-xl font-medium text-blue-500">
              {" "}
              Datos de Aerolinea
            </h4>
            <div className="flex items-center my-2 gap-1 ">
              <GlobeAmericasIcon className=" text-gray-300 size-5 " />
              <p>{aerolinea}</p>
            </div>
            <div className="flex items-center my-2 gap-1 ">
              <PhoneIcon className=" text-gray-300 size-5 " />
              <p>{aeroTelf}</p>
            </div>
            <div className="flex items-center my-2 gap-1 ">
              <EnvelopeIcon className=" text-gray-300 size-5 " />
              <p>{aeroEmail}</p>
            </div>
          </div>
          <div className=" border-t py-3">
            <h4 className=" mt-2 text-xl text-blue-500 font-medium">
              {" "}
              Clases disponibles
            </h4>
            <p className=" text-sm">A continuación selecciona una clase</p>
            <div className=" mt-5 flex gap-3">
              {clases.map((clase) => (
                <button
                  key={clase.id}
                  onClick={(e) => setClSeleccionada(clase)}
                  className={`${
                    clase.id == clSeleccionada.id
                      ? "bg-blue-600 text-white"
                      : " bg-gray-50  text-gray-500"
                  } transition-all text-xl rounded-md px-3 py-1 border`}
                >
                  {clase.nombre}
                </button>
              ))}
            </div>
          </div>
          <Alerta alerta={alerta}/>
          <button
            onClick={(e) => handleCotizar(e)}
            className=" rounded-md bg-blue-600 w-full my-5 text-white py-2"
          >
            Cotizar
          </button>
        </div>
  
    </>
  );
};

export default Cotizador;
