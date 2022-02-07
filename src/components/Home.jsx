import React from "react";
import imgHome from "../img/imgHome.png";
import '../components/css/Home.css'
import { Modal } from "./Modal";
import InicioSesion from "./login/InicioSesion";
import useModal from "../hooks/useModal";

const Home = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false); 
    return (
            <div className="home-container m-20">
                <img src={imgHome} alt="" className="imgHome h-full w-full"/>
                <div className="btn-container  ">
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <InicioSesion/>
                </Modal>
                </div>
                <div className="btn-IS-container">
                   <button onClick={openModal1} className=" h-20 px-10 font-semibold text-4xl  text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Inciar Sesión</button>
                </div>
            </div>
    );
};

export default Home;
