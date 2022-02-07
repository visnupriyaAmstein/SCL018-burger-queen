import React from 'react';
import {auth} from '../../firebase.js';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/MenuItem.css'

const BtnLogOut = () => {
	const navigate = useNavigate();

	const cerrarSesion = async() => {
		try {
			await signOut(auth);
			navigate('/');
		} catch(error){
			console.log(error);
		}
	}

	return (
		<div className='btn-LogOut'>
            <button as="button" onClick={cerrarSesion}><i className="fas fa-sign-out-alt opacity-75 "></i></button>
		</div>
	);
}
 
export default BtnLogOut;
