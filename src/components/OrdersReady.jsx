import {db} from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState} from "react";
import style from "./css/OrdersList.module.css"
import { doc, updateDoc } from "firebase/firestore";

const OrdersReady = () => {

    const [postedOrders, setPostedOrders] = useState([]);

    //Función para mostrar en pantalla los pedidos
    useEffect(() => {
        onSnapshot(
        collection(db, "orders"),
        (snapshot) => {
            const arrayOrders = snapshot.docs.map((order) => {
            return { ...order.data(), id: order.id };
            })
            setPostedOrders(arrayOrders);
            console.log(arrayOrders);
        }
        )
    }, []);

      //Función para editar el Status de los pedidos
    const statusChange = async (idOrder) => {
        console.log(idOrder);
        const postEdit = doc(db, 'orders', idOrder);
        await updateDoc(postEdit, {
            Status: 'Terminado',
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
    // a debe ser igual b
    return 0;
});

return (
    <>
    <h2>PEDIDOS PENDIENTES</h2>
        <div>
            {sortedPendingOrders.map((order) => (
                <div key={order.id} className={style.ordersKitchen}>
                    <h1>Garzón: Garzón</h1>
                    <h2>Mesa: {order.Table}</h2>
                    {order.Order.map((element) => (
                        <div key={element.id}>
                            <div>Pedido: {element.name} Cantidad: {element.count}</div>
                        </div>
                    ))}
                    <button onClick={() => statusChange(order.id)}>PEDIDO LISTO</button>
                </div>
            )
            )}
        </div>
        </>
    );

}

export default OrdersReady;