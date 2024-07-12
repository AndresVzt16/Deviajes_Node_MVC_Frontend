import React, { useEffect, useState } from "react";
import { UserIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import ModalConfirm from "./ModalConfirm";
import Alerta from "./Alerta";

const Testimonial = ({ testimonial, tipo }) => {
  const { eliminarTestimonial } = useAuth();
  const [mensaje, setMensaje] = useState("");
  const [valoracion, setValoracion] = useState(0);
  const [usuario, setUsuario] = useState({});
  const [datos, setDatos] = useState({});
  const [fecha, setFecha] = useState("");
  const [destino, setDestino] = useState({});
  const { boleto } = useAuth();
  const [confirmar, setConfirmar] = useState(false);
  const [modal, setModal] = useState(false);
  const [alerta, setAlerta] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    if (testimonial.id) {
      setDatos(testimonial);
      setMensaje(testimonial.mensaje);
      setFecha(testimonial.createdAt);
      const { usuario, viaje } = testimonial;
      const { destino } = viaje;
      setUsuario(usuario);
      setDestino(destino);
      setValoracion(testimonial.valoracion);
    }
  }, [testimonial]);

  useEffect(() => {
    if (confirmar) {
      eliminacion();
      setConfirmar(false); // Reinicia el estado de confirmación
    }
  }, [confirmar]);

  const eliminacion = async () => {
    await eliminarTestimonial(testimonial.id);
    setAlerta({msg:"Testimonial eliminado correctamente"})
  };

  return (
    <div>
      {modal && (
        <ModalConfirm
          consulta={'¿Estás seguro de que deseas eliminar el testimonial?'}
          confirmar={confirmar}
          setConfirmar={setConfirmar}
          setModal={setModal}
        />
      )}
      <div className="relative border h-full transition-all border-gray-100 bg-gradient-to-r from-white to-gray-100 shadow-lg px-5 py-3 rounded-xl">
        <h4 className="text-blue-600">
          {destino.nombre} - {destino.pais}
        </h4>
        <p className="h-10 text-6xl text-blue-600 font-bold">"</p>
        <p className="px-3 text-sm  min-h-20 text-gray-600">{mensaje}</p>
        <div className="border-t py-2 mt-3">
          <p className="flex items-center text-blue-700 gap-2 text-sm">
            <UserIcon className="bg-blue-50 p-1 rounded-full text-blue-400 w-6 h-6" />
            {usuario.nombre}
          </p>
        </div>
        {tipo === "edicion" && (
          <>
            <div className=" absolute top-3 right-3 flex gap-2 ">
              <Link
                to={`/usuario/calificar/${testimonial.boletoId}?edit=true&id=${testimonial.id}`}
                className=""
              >
                <PencilIcon className="w-10 h-10 bg-white text-gray-600 rounded-md p-2" />
              </Link>
              <button
                onClick={() => setModal(true)}
                className=""
              >
                <TrashIcon className="w-10 h-10 bg-white text-red-600 rounded-md p-2" />
              </button>

            </div>

          </>
        )}
        <p className="text-right text-blue-600 text-sm">
          {fecha ? fecha.split("T")[0] : ""}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
