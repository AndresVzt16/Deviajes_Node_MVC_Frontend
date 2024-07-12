import React, { useEffect, useState } from "react";
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

const Estadistica = ({ dato, titulo, subindice, link }) => {
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        if (titulo && Array.isArray(dato)) {
            setDatos(dato);
        }
    }, [titulo, dato]);

    const ultimaCompra = Array.isArray(dato) ? dato.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] : null;

    return (
        <div className="border border-gray-100 bg-gradient-to-r h-full from-white to-gray-100 shadow-lg px-5 py-3 rounded-xl">
            <h4 className="text-lg font-semibold text-cyan-900 mb-2">
                {titulo}
            </h4>
            <div className="flex items-center my-2 gap-1 text-sm text-cyan-900 font-medium">
                <p className="text-4xl">
                    {Array.isArray(datos) ? datos.length : 0}
                    <span className="text-sm"> {subindice}</span>
                </p>
            </div>
            <div className="flex justify-between items-center text-sm">
                <p className="text-gray-700">Ultimo movimiento</p>
                <div className="flex items-center my-2 gap-1 text-sm text-gray-700">
                    <CalendarDaysIcon className="size-5 text-cyan-900/75" />
                    <p className="text-sm">
                        {ultimaCompra ? ultimaCompra.createdAt.split('T')[0] : "S/F"}
                    </p>
                </div>
            </div>
            <Link to={link} className="shadow-md bg-cyan-900 text-gray-100 font-medium justify-center my-3 py-1 rounded-md w-full flex">
                Ver todos
            </Link>
        </div>
    );
};

export default Estadistica;
