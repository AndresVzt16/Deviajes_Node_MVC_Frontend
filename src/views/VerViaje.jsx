import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Cotizador from "../components/Cotizador";
import Ticket from "../components/Ticket";
const VerViaje = () => {
  const params = useParams();
  const[valorCotizado, setValorCotizado] = useState(0)
  const[ticket, setTicket] = useState({})
  return (
    <>
        <div className=" grid md:grid-cols-2 h-[90vh] p-5 gap-10">
        <div className=" row-start-1 row-end-3 rounded-xl  text-white">
            <Cotizador 
                valorCotizado = {valorCotizado} 
                setValorCotizado = {setValorCotizado} 
                setTicket={setTicket}
            />
        </div>
        
            <Ticket 
                tipo={'Comprando'}
                ticket={ticket}
            />
    
    
        
      </div>
    </>
  );
};

export default VerViaje;
