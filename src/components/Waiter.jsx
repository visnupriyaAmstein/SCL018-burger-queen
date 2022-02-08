import React from "react";
import '../components/css/Waiter.css';
import { Link } from "react-router-dom";
import imgkusumS from "../img/kusumSarovar.png";

const Waiter  = () => {
    return (
        <>
            <main className="waiter-container bg-stone-900 h-screen w-full ">
                <div>
                <img src={imgkusumS} alt="" className="imgkusum h-full w-full"/>
                </div>
                <footer className="footer-btn">
                <Link to="/menu "><button className="btnOrder h-20 px-10 font-semibold text-4xl text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Pedidos</button></Link>
                    <Link to="/kitchen"><button className="btnKitchen h-20 px-10 font-semibold text-4xl text-teal-50 text-teal-900 transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-600">Cocina</button></Link>
                    </footer>
                </main>
            </>
);
};

export default Waiter;