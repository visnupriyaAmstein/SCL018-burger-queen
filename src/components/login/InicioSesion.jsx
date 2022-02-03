import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {auth} from '../../firebase.js';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

const InicioSesion = () => {
    const navigate = useNavigate();
	const [correo, establecerCorreo] = useState('');
	const [password, establecerPassword] = useState('');

    const handleChange = (e) => {
		if(e.target.name === 'email'){
			establecerCorreo(e.target.value);
		} else if (e.target.name === 'password'){
			establecerPassword(e.target.value);
		}
	}

    const handleSubmit = async (e) => {
		e.preventDefault();

		if(correo === '' || password === ''){
			console.log('porfavor rellenar datos');
			return;
		}

		try {
			await signInWithEmailAndPassword(auth, correo, password);
			navigate('/prueba');
            console.log('entraste');
		} catch(error) {
			console.log(error)
			let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}
		}
	}

  return (
        <>

            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={correo}
					onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
					onChange={handleChange}
                />
                <button as="button" type='submit'>iniciar sesion  </button>
            </form>
        </>
     
  );

};  
export default InicioSesion;