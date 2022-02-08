import React from 'react';
import {useAuth} from './login/contextos/AuthContex';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
	const {usuario} = useAuth();

	if(usuario){
		return children;
	} else {
		return <Navigate replace to="/" />;
	}
}
 //toma los componentes hijos y los re direcciona
 
export default PrivateRoute;
