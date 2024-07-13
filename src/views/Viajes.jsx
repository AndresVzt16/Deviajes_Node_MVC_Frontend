import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Ticket from "../components/Ticket";
import { Link } from "react-router-dom";
const Viajes = () => {
  const { boletos } = useAuth();

  const [misBoletos, setMisBoletos] = useState([]);
  const [aerolinea, setAerolinea] = useState({});
  const [destino, setDestino] = useState({});
  const [viaje, setViaje] = useState({});

  useEffect(() => {
    if (boletos.length > 0) {
      const tickets = boletos.map((boleto) => {
        const { id, clase, viaje, precio, aerolinea } = boleto;
        const { destino } = viaje;
        return {
          id,
          nombre: destino.nombre,
          pais: destino.pais,
          precio,
          idDestino: destino.id,
          claseId: clase.id,
          clase: clase.nombre,
          salida: viaje.fecha_salida,
        };
       
      });
      setMisBoletos(tickets);
    }
  }, [boletos]);

  return (
    <>
      <div className="bg-gray-50 w-full h-[90vh] p-5  rounded-xl"> 
        <h3 className=" text-xl font-medium my-2 text-gray-400">Mis viajes</h3>
        
        {misBoletos.length === 0 ? 
          <div className="flex flex-col rounded-xl h-full border border-dashed justify-center items-center">
            <p className="text-center w-full text-3xl text-blue-400">
              No tienes boletos, empieza comprando uno a tu destino favorito.
            </p>
            <div className="w-full justify-center items-center flex">
              <Link to={'/usuario/viajes'} className="bg-gray-800 py-2 px-4 rounded-md text-white mt-5">
                Ver viajes
              </Link>
            </div>
          </div>
          :
          <>
          <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-5">
            {misBoletos.map((boleto) => (
            <Ticket key={boleto.id} ticket={boleto} tipo={"Comprado"} />
              ))}
            </div>
          </>
          
        }
          
        
      </div>
    </>
  );
};

export default Viajes;
