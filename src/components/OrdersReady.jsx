import {db} from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState} from "react";
import style from "./css/OrdersList.module.css"
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const OrdersReady = () => {

    const [postedOrders, setPostedOrders] = useState([]);

    //Función para mostrar en pantalla los pedidos enviados desde cocina 
    useEffect(() => {
        onSnapshot(
        collection(db, "orders"),
        (snapshot) => {
            const arrayOrders = snapshot.docs.map((order) => {
            return { ...order.data(), id: order.id };
            })
            setPostedOrders(arrayOrders);
        }
        )
    }, []);

      //Función para editar el Status de los pedidos
    const statusChange = async (idOrder) => {
        const postEdit = doc(db, 'orders', idOrder);
        await updateDoc(postEdit, {
            Status: 'Entregado',
        });
    };

    const finishedOrders = postedOrders.filter((order) => {
            return order.Status === "Terminado";
        })
    
    let sortedPendingOrders = finishedOrders.sort((a, b) => {
        if (a.Time > b.Time) {
        return 1;
        }
        if (a.Time < b.Time) {
        return -1;
        }
        return 0;
    });

    return (
        <>
        <header>
        <h2 className={style.titleServir}> LISTOS PARA SERVIR</h2>
        <Link to="/menu"><button className={style.backBtn}></button><i className="far fa-arrow-alt-circle-left opacity-75 fa-3x"></i></Link>
        </header>
            <div>
                {sortedPendingOrders.map((order) => (
                    <div key={order.id}  className={style.ordersKitchen}>
                        <div className={style.containerWhite}> 
                        <div className={style.garzonMesa}>
                        <h1>Garzón: {order.Garzon}</h1>
                        <h2>Mesa: {order.Table}</h2>
                        </div>
                        <table className={style.list}>
                        <tbody>
                        {order.Order.map((element) => (
                            <tr  key={element.id} className={style.containerPedido}>
                                <td className={style.tdList}>
                                    <p className={style.pedido}>Pedido:</p>
                                    <p className={style.pedido1}>{element.name}</p>
                                </td>
                                <td className={style.tdList1}>
                                    <p className={style.cantidad}>Cantidad:</p>
                                </td>
                                <td>
                                    <p className={style.cantidad1}>{element.count}</p>
                                </td>
                            </tr >
                        ))}
                        </tbody>
                            </table>
                            <p className={style.total}>Total a pagar: $ {order.Total}</p>
                            <button className={style.btnEntregado} onClick={() => statusChange(order.id)}>PEDIDO SERVIDO</button>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    );
}

export default OrdersReady;
