import React from 'react';
import {auth} from '../../firebase.js';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BtnLogOut = () => {
	const navigate = useNavigate();

	const cerrarSesion = async() => {
		try {
			await signOut(auth);
			navigate('/waiter');
		} catch(error){
			console.log(error);
		}
	}

	return (
		<button as="button" onClick={cerrarSesion}>cerrar sesion </button>
	);
}
 
export default BtnLogOut;
