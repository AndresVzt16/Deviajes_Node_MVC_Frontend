import React, { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Card = ({ viaje }) => {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [disponibles, setDispoibles] = useState("");
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    if (viaje.id) {
      const { aerolinea, destino } = viaje;
      setNombre(destino.nombre);
      setPais(destino.pais);
      setFecha(formatearFechaHora("fecha", viaje.fecha_salida));
      setHora(formatearFechaHora("hora", viaje.fecha_salida));
      setDispoibles(viaje.disponibles);
      setPrecio(viaje.precio);
    }
  }, []);

  const formatearFechaHora = (obtener, data) => {
    const fecha = data.split("T")[0];
    const hora = data.split("T")[1].split(".")[0];
    if (obtener == "fecha") {
      return fecha;
    } else {
      return hora;
    }
  };

  return (
    <>
      <div className="borde bg-gradient-to-r from-gray-900 to-gray-950 shadow-lg px-5 py-3 rounded-xl">
        <h4 className=" text-lg font-semibold text-white mb-2">
          {nombre} - {pais}
        </h4>
        <div className="flex items-center my-2 gap-1 text-sm text-gray-200 ">
          <UserGroupIcon className=" size-5 text-white/75" />
          <p>{disponibles} disponibles</p>
        </div>
        <div className="flex items-center my-2 gap-1 text-3xl font-medium text-gray-100">
          <p className="">
            ${precio}
            <span className="text-sm "> / persona</span>
          </p>
        </div>

        <div className=" flex justify-between">
          <div className="flex items-center my-2 gap-1 text-sm  text-gray-200">
            <CalendarDaysIcon className=" size-5 text-white/75" />
            {fecha}
          </div>
          <div className="flex items-center my-2 gap-1  text-gray-200">
            <ClockIcon className=" size-5 text-white/75 " />
            <p>{hora}</p>
          </div>
        </div>
        <Link
          to={`/usuario/viaje/${viaje.id}`}
          className=" bg-white text-gray-800 font-medium justify-center my-3 py-1 rounded-md w-full flex"
        >
          Comprar ahora
        </Link>
      </div>
    </>
  );
};

export default Card;
