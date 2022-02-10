import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {auth} from '../../firebase.js';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import './css/InicioSesion.css'

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
			return;
		}
		try {
			await signInWithEmailAndPassword(auth, correo, password);
			navigate('/waiter');
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
					<div className='input-container'>
						<input className='input'
						type="email"
						name="email"
						placeholder="Correo Electrónico"
						value={correo}
						onChange={handleChange}
						/>
						<input className='input'
						type="password"
						name="password"
						placeholder="Contraseña"
						value={password}
						onChange={handleChange}
						/>
					</div>
					<div className='btn-IS'>
                <button as="button" className='button-IS px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300"' type='submit'>Iniciar Sesión</button>
				</div> 
            </form>
        </>
);
};  
export default InicioSesion;
