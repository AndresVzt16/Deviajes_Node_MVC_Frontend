import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./views/Login";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import PrivateLayout from "./layout/PrivateLayout";
import { AuthProvider } from "./context/AuthProvider";
import VerViaje from "./views/VerViaje";
import Viajes from "./views/Viajes";
import VerViajes from "./views/verViajes";
import MisTestimoniales from "./views/MisTestimoniales";
import TestimonialForm from "./views/TestimonialForm";
import Testimoniales from "./views/Testimoniales";
import Nosotros from "./components/Nosotros";
import SobreNosotros from "./views/SobreNosotros";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/viajes" element={<VerViajes />} />
              <Route path="/testimoniales" element={<Testimoniales />} />
              <Route path="/nosotros" element={<SobreNosotros/>}/>
            </Route>
            
            {/* Rutas privadas */}
            <Route path="/usuario" element={<PrivateLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="viaje/:id" element={<VerViaje/>}/>
              <Route path="mis-viajes" element={<Viajes/>}/>
              <Route path="viajes" element={<VerViajes/>}/>
              <Route path="calificar/:id" element={<TestimonialForm/>}/>
              <Route path="mis-testimoniales" element={<MisTestimoniales/>}/>
              <Route path="calificar/:id&edit=true" element={<TestimonialForm action={'Editar'}/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

