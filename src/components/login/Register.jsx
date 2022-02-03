import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {auth} from '../../firebase.js';
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegistroUsuarios = () => {
	const navigate = useNavigate();
	const [correo, establecerCorreo] = useState('');
	const [password, establecerPassword] = useState('');

	const handleChange = (e) => {
		switch(e.target.name){
			case 'email':
				establecerCorreo(e.target.value);
				break;
			case 'password':
				establecerPassword(e.target.value);
				break;
			default:
				break;
		}
	}

    const handleSubmit = async (e) => {
		e.preventDefault();

		if(correo === '' || password === '' ){
			console.log('rellenar todos los campos')
            return;
		}

		try {
			await createUserWithEmailAndPassword(auth, correo, password );
			navigate('/');
		} catch(error) {
			console.log('error');

			let mensaje;
			switch(error.code){
				case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
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
				<button as="button"  type='submit'>crear cuenta </button>
			</form>
		</>
	);
}

export default RegistroUsuarios;
