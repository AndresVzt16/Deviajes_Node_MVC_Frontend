import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate()
    const[alerta, setAlerta] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSumbit = async(e) =>{
        e.preventDefault()
        const validar =  [email, password, nombre, telefono]
        if(validar.includes('')){
            setAlerta({msg:"Hay campos vacios", error:true})
            return;
        }
        try {
            const url = ('/usuario')
            const data = await clienteAxios.post(url, {nombre, email, password, telefono})
            setAlerta({msg: "Usuario registrado exitosamente"})
            setEmail('')
            setNombre('')
            setPassword('')
            setTelefono('')
            setTimeout(()=>{
                navigate('/login')
            },2000)
            

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
        

    }
  return(
    <>
     <div className=" flex justify-center">
     <div className="animate-fade-down flex w-1/2 justify-center items-center rounded-xl flex-col flex-wrap border border-gray-100 py-10 shadow-lg bg-white/10">
        <h2 className="text-blue-700 mb-5 font-semibold text-center text-3xl h-fit w-full">
            Registrarse
        </h2>
       
        <form className="  flex flex-wrap px-10 justify-center w-5/6 pb-10 rounded-xl border text-gray-500 border-gray-50/10 items-center">
        <Alerta alerta={alerta}/>
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
            <button onClick={e => handleSumbit(e)} className="bg-blue-700 text-white px-10 mt-5 w-full py-2 rounded-lg">
                Registrarse
            </button>
            <p className="block w-full text-center mt-5">
              
                     ¿Ya tienes una cuenta?  
                <Link to= '/login' className="text-blue-500">Inicia sesión</Link>
            </p>
        </form>
    </div>
     </div>
    </>

);
};

export default Signup;
