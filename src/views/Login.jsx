import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/axios";

import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const{setAuth} = useAuth()
  const [alerta, setAlerta] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSumbit = async(e) => {
    e.preventDefault()
    if([email,password].includes('')){
      setAlerta({msg:"Todos los campos son obligatorios", error:true})
      return;
    }
    try {
      const {data} = await clienteAxios.post('usuario/login',{email, password})
      localStorage.setItem('token_deviajes', data.token )
      setAuth(data)
      navigate('/usuario')
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true})
    }
    
  }
  return (
    <>
      <div className=" flex justify-center">
        <div className="animate-fade-down flex w-1/2 justify-center items-center rounded-xl flex-col flex-wrap border border-gray-100 py-10 shadow-lg bg-white/10">
          <h2 className="text-blue-700 mb-5 font-semibold text-center text-3xl h-fit w-full">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSumbit} className="  flex flex-wrap px-10 justify-center w-5/6 pb-10 rounded-xl border text-gray-500 border-gray-50/10 items-center">
            <Alerta alerta={alerta} />

            <div className="w-full mb-5">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="text"
                id="email"
                className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label htmlFor="password" className="">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className=" px-3 mt-3 block border w-full h-10 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
             
              className="bg-blue-700 text-white px-10 mt-5 w-full py-2 rounded-lg"
            >
            Iniciar Sesión
            </button>
            <p className="block w-full text-center mt-5">
              ¿No tienes una cuenta?
              <Link to="/signup" className="text-blue-500">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
