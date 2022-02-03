import React from "react";
import hrojo from "../img/h-rojo.png";
import mrojo from "../img/m-rojo.png";
import useModal from "../hooks/useModal";
import { Modal } from "./Modal";
import '../components/css/Waiter.css'
import RegistroUsuarios from "./login/Register";
import InicioSesion from "./login/InicioSesion";

const Waiter  = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false); 
        return (
            <>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <InicioSesion/>
            </Modal>
            <RegistroUsuarios/>
                <div className="waiter-container bg-stone-900 h-screen w-full ">
                    <div className="avatarRed flex ">
                      <img src={hrojo} alt="" className="imgAvatar w-25 h-25" />
                      <img src={mrojo} alt="" className="imgAvatar w-25 h-25" />
                    </div>
                    <div className="btn-login">  
                      <button onClick={openModal1} className="btnAvatar h-20 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Inciar Sesión</button>
                    </div>
                </div>
            </>
  );
};

export default Waiter;
