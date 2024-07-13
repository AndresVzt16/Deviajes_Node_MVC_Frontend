import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";

const Testimoniales = () => {
  const { testimonialesGeneral, obtenerTestimonialesGeneral } = useAuth();
  const [testimoniales, setTestimoniales] = useState([]);

  useEffect(()=>{
    obtenerTestimonialesGeneral()
  },[])
  useEffect(() => {
    if (testimonialesGeneral && Array.isArray(testimonialesGeneral)) {
      setTestimoniales(testimonialesGeneral);
    }
  }, [testimonialesGeneral]);



  return (
    <div className="bg-gray-50 w-full h-[90vh] rounded-xl grid gap-10 md p-5">
      <div className="row-start-1 row-end-4 bg-white rounded-xl p-5">
        <h4 className="text-2xl mb-5 font-semibold text-gray-400">Testimoniales</h4>
        <p className=" text-blue-800 font-medium my-5">Lo que nuestros clientes dicen.</p>
      
          <div className="animate-fade-up grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {testimoniales.map((testimonial) => (
              <Testimonial key={testimonial.id} tipo={'vista'} testimonial={testimonial} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Testimoniales;