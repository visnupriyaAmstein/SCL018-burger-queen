import React from "react";
import '../components/css/Modal.css'
import logo1 from '../img/logo1.png'

export const Modal = ({children, isOpen, closeModal})=>{
     const handleModalContainerClick = e => e.stopPropagation(); //evita evento de cierre modal 
    return(
        <main className={`modal ${isOpen &&"is-open"}`}onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <article className="art-Logo"> 
                <img src={logo1} alt="" className="imgLogo " />
                </article>
                <button className="modal-close "onClick={closeModal}><i className="fas fa-times-circle fa-2x text-lime-500"></i></button>
                {children}
            </div>
        </main>
    );
};

