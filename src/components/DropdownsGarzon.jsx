import React from "react";
import "../components/css/Dropdowns.css";

const DropdownsGarzon = ({ show, showMenu, setGarzon }) => {
const handleClick = (table) =>{
    showMenu(false);
    setGarzon(table);
}
return (
    <>
    {!show?
        <div >
            <button onClick={() => showMenu(true)}>Garzon</button>
        </div>
        :
        <div className="dropdownsGarzon">
        <option onClick={()=>{handleClick('Garzon 1')}}>Garzon 1</option>
        <option onClick={()=>{handleClick('Garzon 2')}}>Garzon 2</option>
        <option onClick={()=>{handleClick('Garzon 3')}}>Garzon 3</option>
        <option onClick={()=>{handleClick('Garzon 4')}}>Garzon 4</option>
        
        </div>
        }
    </>
);
};

export default DropdownsGarzon;
