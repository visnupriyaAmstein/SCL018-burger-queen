import React from "react";
import { Link } from "react-router-dom";
import hamarillo from "../img/h-amarillo.png";
import mamarillo from "../img/m-amarillo.png";
import hceleste from "../img/h-celeste.png";
import mceleste from "../img/m-celeste.png";
import hrojo from "../img/h-rojo.png";
import mrojo from "../img/m-rojo.png";
import "../components/css/Waiter.css";

const Waiter  = () => {
    return (
        <>
          <div className="order-container columns-3 bg-stone-900 ">
            <div className="avatarYellow  ">
                <img src={hamarillo} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 1</button></Link>
                <img src={mamarillo} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzona 4</button></Link>
             </div>
             <div className="avatarRed space-x-3.5 ">
                <img src={hrojo} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 2</button></Link>
                <img src={mrojo} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzona 5</button></Link>
              </div>
              <div className="avatarlightblue ">
                <img src={hceleste} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar space-x-3.5 h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzón 3</button></Link>
                <img src={mceleste} alt="" className="imgAvatar w-25 h-25" />
                <Link to="/waiter"><button className="btnAvatar space-x-3.5 h-10 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Garzona 6</button></Link>
              </div>
            </div>
        </>
    );
};

export default Waiter;