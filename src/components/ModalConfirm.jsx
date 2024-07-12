import React from 'react';
import {
    CalendarDaysIcon,
    ClockIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    UserIcon,
    GlobeAmericasIcon,
    PhoneIcon,
    EnvelopeIcon,
    CheckIcon,
    XMarkIcon
} from "@heroicons/react/24/solid";



const ModalConfirm = ({consulta, confirmar, setConfirmar,setModal}) => {
    const handleCancelar = () => {
        setConfirmar(false)
        setModal(false)
    }
    const handleConfirmar = () => {
        setConfirmar(true)
        console.log(confirmar)
    }
  return (
    <div className=" animate-jump bg-gray-50 border p-2 rounded-md my-2 text-red-600 w-full top">
      <p className=' text-sm text-center'>{consulta}</p>
      <div className=' flex gap-2 text-sm justify-between mt-3 '>
      <button  onClick={ e=> handleConfirmar()}  className=' border-green-500 shadow-md text-green-600 border items-center w-full  rounded-md  justify-center flex px-2 py-3'>
        <CheckIcon className="inline w-4 h-4" />
        Si
      </button>
      <button   onClick={ e=> handleCancelar()} className='bg-red-500 borde w-full justify-center text-white shadow-md  rounded-md items-center  flex px-2 py-1'>
        <XMarkIcon className="inline w-4 h-4" />
        No
      </button>
      </div>

    </div>
  );
};

export default ModalConfirm;
