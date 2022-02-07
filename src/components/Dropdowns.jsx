import React from "react";
import "../components/css/Dropdowns.css";

const Dropdowns = ({ show, showMenu, setTable }) => {
const handleClick = (table) =>{
    showMenu(false);
    setTable(table);
}
return (
    <>
    {!show?
        <div >
            <button onClick={() => showMenu(true)}>Mesas</button>
        </div>
        :
        <div className="dropdownsMesa">
        <option onClick={()=>{handleClick('Mesa 1')}}>Mesa 1</option>
        <option onClick={()=>{handleClick('Mesa 2')}}>Mesa 2</option>
        <option onClick={()=>{handleClick('Mesa 3')}}>Mesa 3</option>
        <option onClick={()=>{handleClick('Mesa 4')}}>Mesa 4</option>
        
        </div>
        }
    </>
);
};

export default Dropdowns;
