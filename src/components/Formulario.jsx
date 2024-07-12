import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from './Alerta';
import axios from 'axios';
const Formulario = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const[alerta,setAlerta] = useState({})

    const handleSumbit = async(e) =>{
        e.preventDefault()
        const validar = type =="Signup" ? [email, password, nombre, telefono]: [email, password]
        if(validar.includes('')){
            setAlerta({msg:"Hay campos vacios", error:true})
            setTimeout(() => {
               setAlerta({}) 
            }, 3000);
            return;
        }
        if(type === "Signup"){
            registrarUsuario({nombre, email, password, telefono})
        }
        

    }

    const registrarUsuario = async(datos)=> {
        const{nombre, email, password, telefono} = datos
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className="flex w-1/2 justify-center items-center rounded-xl flex-col flex-wrap border border-gray-100 py-10 shadow-lg bg-white/10">
            <h2 className="text-blue-700 mb-5 font-semibold text-center text-3xl h-fit w-full">
                {type === "Signup" ? "Registrarse" : "Iniciar Sesión"}
            </h2>
           
            <form className="flex flex-wrap px-10 justify-center w-5/6 pb-10 rounded-xl border text-gray-500 border-gray-50/10 items-center">
            {alerta.msg && <Alerta alerta={alerta}/>}
                <div className="w-full mb-5">
                    <label htmlFor="email" className="">Email</label>
                    <input
                        type="text"
                        id="email"
                        className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full mb-5">
                    <label htmlFor="password" className="">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {type === "Signup" && (
                    <>
                        <div className="w-full mb-5">
                            <label htmlFor="nombre" className="">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="w-full mb-5">
                            <label htmlFor="telefono" className="">Teléfono</label>
                            <input
                                type="text"
                                id="telefono"
                                className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                    </>
                )}
                <button onClick={e => handleSumbit(e)} className="bg-blue-700 text-white px-10 mt-5 w-full py-2 rounded-lg">
                    {type === "Signup" ? "Registrarse" : "Iniciar Sesión"}
                </button>
                <p className="block w-full text-center mt-5">
                    {type === "Signup"
                        ? "¿Ya tienes una cuenta? "
                        : "¿No tienes una cuenta? "}
                    <Link to={type === "Signup" ? '/login' : '/signup'} className="text-blue-500">
                        {type === "Signup" ? "Inicia sesión" : "Regístrate"}
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Formulario;
