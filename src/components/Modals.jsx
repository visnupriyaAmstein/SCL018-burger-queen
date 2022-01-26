// import React from "react";
// import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import '../components/css/Modal.css'


export const Modals = ()=>{
    const [isOpenModal1,openModal1,closeModal1] = useModal(false); 

    return(
        <div>
            {/* <button className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzona 4</button> */}
            {/* <Modal isOpen={isOpenModal1} closeModal={closeModal1}> */}
            <Modal>
            <h1>modal1</h1>
            <p>hola raton con cola holaaaaaaa</p>
            </Modal>
        </div>
    );
};