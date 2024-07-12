import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";

const MisTestimoniales = () => {
  const { testimonialesUsuario } = useAuth();
  const [testimoniales, setTestimoniales] = useState([]);

  useEffect(() => {
    if (testimonialesUsuario && Array.isArray(testimonialesUsuario)) {
      setTestimoniales(testimonialesUsuario);
    }
  }, [testimonialesUsuario]);

  console.log(testimonialesUsuario);

  return (
    <div className="bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 md p-5">
      <div className="row-start-1 row-end-4 bg-white rounded-xl p-5">
        <h4 className="text-xl mb-5 font-semibold text-gray-400">Mis testimoniales</h4>
        {testimoniales.length === 0 ? (
          <div className="flex flex-col rounded-xl h-full border border-dashed justify-center items-center">
            <p className="text-center w-full text-3xl text-blue-400">
              No tienes publicaciones, empieza creando una de tu viaje favorito.
            </p>
            <div className="w-full justify-center items-center flex">
              <Link to={'/usuario/mis-viajes'} className="bg-gray-800 py-2 px-4 rounded-md text-white mt-5">
                Ir a mis viajes
              </Link>
            </div>
          </div>
        ) : (
          <div className="animate-fade-up grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {testimoniales.map((testimonial) => (
              <Testimonial key={testimonial.id} tipo={'edicion'} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MisTestimoniales;
