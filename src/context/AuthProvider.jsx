import { createContext, useEffect, useState } from "react";
import clienteAxios from "../../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const [boletos, setBoletos] = useState({});
    const [viaje, setViaje] = useState({});
    const [viajes, setViajes] = useState([]);
    const [clases, setClases] = useState({});
    const [boleto, setBoleto] = useState({});
    const [testimonialesUsuario, setTestimonialesUsuario] = useState({});
    const[testimonialesGeneral, setTestimonialesGeneral] = useState([])

    useEffect(() => {
        autenticarUsuario();
        obtenerTestimonialesGeneral()
        obtenerViajes()
    }, []);

    useEffect(() => {
        if (auth && auth.id) {
            obtenerBoletos();
            obtenerClases();
            obtenerTestimoniales();
            
        }
    }, [auth]);

    const autenticarUsuario = async () => {
        const token = localStorage.getItem('token_deviajes');

        if (!token) {
            setCargando(false);
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const { data } = await clienteAxios('/usuario/perfil', config);
            setAuth(data);
        } catch (error) {
            setAuth({});
        } finally {
            setCargando(false);
        }
    };

    const obtenerViaje = async (id) => {
        try {
            const { data } = await clienteAxios(`/viajes/${id}`);
            setViaje(data);
        } catch (error) {
            setViaje({});
        }
    };
    const obtenerViajes = async () => {
        try {
            const { data } = await clienteAxios(`/viajes`);
            setViajes(data);
        } catch (error) {
            setViajes([]);
        }
    };

    const realizarCompra = async (boleto) => {
        const { id: viaje, claseId: clase } = boleto;
        const token = localStorage.getItem('token_deviajes');
        const compra = { viaje, clase };

        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await clienteAxios.post('/boletos/crear-boleto', compra, config);
            obtenerBoletos();
        } catch (error) {
            console.log(error);
        }
    };

    const obtenerBoletos = async () => {
        const token = localStorage.getItem('token_deviajes');
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const { data } = await clienteAxios.get('/boletos/mis-boletos', config);
            setBoletos(data);
        } catch (error) {
            setBoletos({});
        }
    };

    const obtenerClases = async () => {
        try {
            const { data } = await clienteAxios('/clase');
            setClases(data);
        } catch (error) {
            setClases({});
        }
    };

    const obtenerTestimoniales = async () => {
        const token = localStorage.getItem('token_deviajes');
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const { data } = await clienteAxios('testimoniales/mis-testimoniales', config);
            setTestimonialesUsuario(data);
        } catch (error) {
            setTestimonialesUsuario({});
        }
    };

    const publicarTestimonial = async (idViaje, mensaje, calificacion, boleto) => {
        const token = localStorage.getItem('token_deviajes');
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await clienteAxios.post(`/testimoniales/${idViaje}`, { boleto  ,mensaje, valoracion: calificacion }, config);
            obtenerTestimoniales();
        } catch (error) {
            console.log(error);
        }
    };

    const editarTestimonial = async(id, mensaje, calificacion,) => {
        const token = localStorage.getItem('token_deviajes');
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await clienteAxios.put(`/testimoniales/${id}`, { mensaje, valoracion: calificacion }, config);
            obtenerTestimoniales();
        } catch (error) {
            console.log(error);
        }
    }
    const eliminarTestimonial = async(id) => {
        const token = localStorage.getItem('token_deviajes');
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const{data} = await clienteAxios.delete(`/testimoniales/${id}`, config)
            obtenerTestimoniales()
        } catch (error) {
            console.log(error)
        }
        
    }
    const cerrarSesion = () => {
        localStorage.removeItem('token_deviajes');
        setAuth({});
    };
    const obtenerTestimonialesGeneral = async() => {
        const {data} = await clienteAxios.get('/testimoniales')
       setTestimonialesGeneral(data)
    }
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            cargando,
            boletos,
            autenticarUsuario,
            obtenerViaje,
            viaje,
            clases,
            realizarCompra,
            testimonialesUsuario,
            publicarTestimonial,
            cerrarSesion,
            editarTestimonial,
            boleto,
            setBoleto,
            eliminarTestimonial,
            testimonialesGeneral,
            obtenerViajes,
            viajes,
            obtenerTestimonialesGeneral
        }}>
            {!cargando && children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
