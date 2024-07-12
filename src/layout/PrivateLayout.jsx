import React from "react";
import HeaderUsuario from "../components/HeaderUsuario";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateLayout = () => {
  const { auth, cargando} = useAuth();
  if(cargando ) return  'Cargando...'
  return (
    <>
      <div className=" container mx-auto my-0">
        <HeaderUsuario />
        <div className="">
          {auth?.id ? <Outlet /> : <Navigate to={'/login'}/> }
          
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
