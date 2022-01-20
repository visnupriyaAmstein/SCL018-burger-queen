import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";
import Waiter from "../components/Waiter";

const WaiterView = ()=>{
    return(
        <>
        <Modal>
        <h1>modal1</h1>
        <p>hola contenido </p>
        </Modal>
        <Waiter/>
        </>
    );
};
export  default WaiterView;
