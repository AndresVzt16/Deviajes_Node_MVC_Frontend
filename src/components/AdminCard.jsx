import React, { useEffect, useState } from "react";
import { CalendarDaysIcon, ClockIcon, UserGroupIcon,CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
const AdminCard = ({dato, titulo, descripcion}) => {
    const[title,setTitle] = useState('')
    const[data,setData] = useState({})
   

    useEffect(()=>{
        if(titulo){
           setData(data)
           setTitle(titulo)
        }
        
    },[])
  return (
    <>          
      <div className="borde bg-gradient-to-r from-gray-900 to-gray-950 shadow-md px-5 py-3 rounded-xl">
        <h4 className=" text-lg font-semibold text-white mb-2">
            {title} 
        </h4>
        <div className="flex items-center my-2 gap-1 text-sm  text-gray-300">
            <p className="">{descripcion}<span className="text-sm "></span></p>
        </div>
        <div className="flex items-center my-2 gap-1 text-4xl font-medium text-gray-100">
            <p className=" text-center w-full">{dato}</p>
        </div>

        <Link to={'/admin/viajes'} className=" bg-white text-gray-800 font-medium justify-center my-3 py-1 rounded-md w-full flex">
            Ver lista completa
        </Link>
      </div>
    </>
  );
};

export default AdminCard;