import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightStartOnRectangleIcon, UserIcon } from '@heroicons/react/24/solid';
import useAuth from '../hooks/useAuth';

const HeaderUsuario = () => {
    const { auth, cerrarSesion } = useAuth();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        if (auth.id) {
            setUsuario(auth);
        }
    }, [auth]);

    return (
        <>
            <div className='flex justify-between items-center py-2'>
                <Link className='w-2/12' to={'/usuario'}>
                    <img src="/assets/img/Logo.svg" className='size-20' alt="" />
                </Link>
                <nav className='w-6/12 flex gap-10 text-blue-900 justify-center font-medium'>
                    <Link to={'/usuario'}>Dashboard</Link>
                    <Link to={'/usuario/mis-viajes'}>Mis boletos</Link>
                    <Link to={'/usuario/viajes'}>Viajes</Link>
                    <Link to={'/usuario/mis-testimoniales'}>Mis testimoniales</Link>
                </nav>
                <div className='w-3/12 flex justify-end'>
                    <p className='w-fit flex gap-2 items-center bg-blue-50 px-4 py-2 rounded-md text-blue-900 font-medium'>
                        <UserIcon className='size-5' />
                        {usuario.nombre}
                    </p>
                    <button onClick={e => cerrarSesion()} className=' bg-blue-50 rounded-md p-2 ml-1 text-blue-900 '>
                        <ArrowRightStartOnRectangleIcon className=' size-6'/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeaderUsuario;

