import React, { useEffect, useState} from 'react';
import {db} from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import style from "./css/Orders.module.css"
import Dropdowns from './Dropdowns';
import DropdownsGarzon from './DropdownsGarzon';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Orders = ({cartItems, addProduct, removeProducts, removeAllProducts, deleteProducts, show, showMenu}) => {

    const MySwal = withReactContent(Swal);

    const [table, setTable] = useState('');
    const [garzon, setGarzon] = useState('');

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);
    const getDate = () => {
        const hoy = new Date();
        const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
        const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
        const fechaYHora = `${fecha} ${hora}`;
        return fechaYHora;
    };

    const totalPrice = itemsPrice;

    // alert para confirmar el enviar pedido a la cocina
    const sendOrder = (e) => {
        if (table === "" || garzon === "") {
            MySwal.fire({
                title: "Ups...",
                text: "Creo que olvidaste escribir el Garzón o Mesa del cliente",
                icon: "error",
            });
            } else if (cartItems.length === 0) {
            MySwal.fire({
                title: "Espera un momento!",
                text: "No has ingresado productos al pedido",
                icon: "error",
            });
            } else {
            Swal.fire({
                title: "¿Deseas confirmar el pedido?",
                text: "Si tienes dudas, consúltalo con el cliente",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirmar",
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire("Enviado", "El pedido ha sido enviado a Cocina", "success");
                toFirebase(e);
                }
            });
        }
    };

    // alert para confirmar la eliminación del pedido 
    const deleteOrder = () => {
        if(cartItems.length !== 0) {
            Swal.fire({
                title: "¿Deseas eliminar el pedido?",
                text: "Si tienes dudas, consúltalo con el cliente",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirmar",
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire("Eliminado", "El pedido ha sido eliminado", "success");
                removeAllProducts();
                }
            });
        }
    }

    // Función para crear la colección de "orders"
    const toFirebase = async (e) => {
        e.preventDefault();
        console.log("funcionando toFirebase");
    try {
        const docRef = await addDoc(collection(db, 'orders'), {
            Garzon: garzon,
            Table: table,
            Total: totalPrice,
            Time: getDate(),
            Order: cartItems,
            Status: 'Pendiente',
    });
        removeAllProducts();
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

/*useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);*/

    return (
        <>
            <aside id="order" className={style.order}>
                <h1 className={style.title}>Resumen del Pedido</h1>
                <div className={style.conteiner}>
                    <div id="tableInfo" className={style.tableInfo} >
                        <DropdownsGarzon show={show} showMenu={showMenu} setGarzon={setGarzon} />
                        <Dropdowns show={show} showMenu={showMenu} setTable={setTable}/>
                    </div>
                    <div id="titlesAbove" className={style.titlesAbove}>
                        <div className={style.tableWaiter}>
                            <h1>{garzon}</h1>
                            <h2>{table}</h2>
                            </div>
                        <div>{cartItems.length === 0 && <h3 id="emptyOrder" className={style.emptyOrder}>Orden vacía</h3>}</div>
                            <table className={style.table}>
                                <tbody>
                                    {cartItems?.map((item) => {
                                    return(<tr key={item.id} className={style.itemsInOrder}>
                                    <td>
                                        <p className={style.listP}>{item.name}</p>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => addProduct(item)} className={style.changeNumberItem} id="add"><i className="fas fa-plus-circle text-green-500"></i></button>
                                    </td>
                                    <td>
                                        <p className={style.countPrice}>{item.count} x {item.price}</p>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => removeProducts(item)} className={style.changeNumberItem} id="deduct"><i className="fas fa-minus-circle text-amber-500"></i></button>
                                    </td>
                                    <td>
                                    <button type="button" onClick={() => deleteProducts(item)} className={style.changeNumberItem} id="add"><i className="fas fa-times-circle text-red-600"></i></button> 
                                    </td>
                                    </tr>
                                )})
                                }
                                </tbody>
                            </table>
                    <div className={style.equalPrice}>
                        <h3>Total de la orden:</h3>
                        <p className={style.colorPrice}>$</p><p className={style.colorPrice}>{itemsPrice}</p>
                    </div>   
                    <div className={style.btnSendDelete}>  
                        <div className={style.btnSend}>
                            <button  type='submit'className={style.interactionWithOrder} id="sendOrder" onClick={sendOrder} >Enviar Pedido</button>
                        </div>
                        <div className={style.btnDelete}>
                            <button type="button" onClick={deleteOrder} className={style.interactionWithOrder} id="eraseOrder">Borrar Pedido</button>
                        </div>
                    </div> 
                </div>
                </div>
            </aside>
        </>
    )
}

export default Orders;