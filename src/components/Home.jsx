import React from "react";
import { Link } from "react-router-dom";
import imgHome from "../img/imgHome.png";
import '../components/css/Home.css'

const Home = () => {
    return (
        <>
            <div className="home-container m-20">
                <img src={imgHome} alt="" className="imgHome"/>
                <div className="btn-container  ">
                    <Link to="/waiter "><button className="btnOrder h-20 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300">Pedidos</button></Link>
                    <Link to="/kidchen"><button className="btnKidchen h-20 px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-600">Cocina</button></Link>
                </div>
            </div>
        </>
    );
};

export default Home;