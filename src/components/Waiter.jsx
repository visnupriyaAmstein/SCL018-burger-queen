import React from "react";
import '../components/css/Waiter.css'
import { Link } from "react-router-dom";

const Waiter  = () => {
        return (
            <>
                <div className="waiter-container bg-stone-900 h-screen w-full ">
                    <Link to="/menu "><button className="btnOrder h-20 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Pedidos</button></Link>
                     <Link to="/kitchen"><button className="btnKidchen h-20 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-600">Cocina</button></Link>
                </div>
            </>
  );
};

export default Waiter;
