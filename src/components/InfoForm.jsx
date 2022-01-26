import React,{useState,useRef} from "react";

export const InfoForm = () => {
    const [stateModal, changeState]= useState(true);
    const [name ,setName ]= useState("");
    const [number, setNumber]= useState("")
    return (
        <>
            <div>
                <input type="text" name="name" placeholder="Nombre" onChange={event => setName(event.target.value)}/>
                <input type="number" name="number" placeholder="Numero de mesa" onChange={event => setNumber(event.target.value)}/>
                <button onClick={()=> changeState(!stateModal)}>ingresar</button>
            </div>
    </>

    );
};

export default InfoForm;
