import { useContext } from 'react';
import AuthContext from '../context/AuthProvider'; // Asegúrate de que el path es correcto

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
