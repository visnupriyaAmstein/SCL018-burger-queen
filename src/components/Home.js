import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
return (
        <>
            <div className="m-20">
                <div className="flex justify-center">
                </div>
                <div className="flex justify-center space-x-10">
                    <Link to="/garzon"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">garzon</button></Link>
                    <Link to="/cocina"><button className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline hover:bg-teal-800">cocina</button></Link>
                </div>
            </div>
        </>

);
}
