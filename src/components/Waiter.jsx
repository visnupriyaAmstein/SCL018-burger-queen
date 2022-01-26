import React from "react";
import { Link } from "react-router-dom";
import hamarillo from "../img/h-amarillo.png";
import mamarillo from "../img/m-amarillo.png";
import hceleste from "../img/h-celeste.png";
import mceleste from "../img/m-celeste.png";
import hrojo from "../img/h-rojo.png";
import mrojo from "../img/m-rojo.png";
import useModal from "../hooks/useModal";
import { Modal } from "./Modal";
import InfoForm from "./InfoForm"

const Waiter  = () => {
  const [isOpenModal1,openModal1,closeModal1] = useModal(false); 
    return (
        <>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <InfoForm/>
        </Modal>
          <div className="order-container columns-3 bg-stone-900 ">
            <div className="avatarYellow  ">
                <img src={hamarillo} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 1</button>
                <img src={mamarillo} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 4</button>
             </div>
             <div className="avatarRed space-x-3.5 ">
                <img src={hrojo} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 2</button>
                <img src={mrojo} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 5</button>
              </div>
              <div className="avatarlightblue ">
                <img src={hceleste} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar space-x-3.5 h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 3</button>
                <img src={mceleste} alt="" className="imgAvatar w-25 h-25" />
                <button onClick={openModal1} className="btnAvatar space-x-3.5 h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 6</button>
              </div>
            </div>
        </>
    );
};

export default Waiter;