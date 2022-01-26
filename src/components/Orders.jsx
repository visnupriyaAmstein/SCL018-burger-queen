import React, { useEffect } from 'react';
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Orders = ({cartItems, addProduct, removeProducts, removeAllProducts, deleteProducts}) => {
    console.log(cartItems);

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);
    console.log(itemsPrice);

    const getDate = () => {
        const hoy = new Date();
        const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
        const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
        const fechaYHora = `${fecha} ${hora}`;
        return fechaYHora;
        
    };

    const totalPrice = itemsPrice;

    // Función para crear la colección de "orders"
    const toFirebase = async (e) => {
        e.preventDefault();
        console.log("funcionando toFirebase");
    try {
        const docRef = await addDoc(collection(db, 'orders'), {
            Total: totalPrice,
            Time: getDate(),
            Order: cartItems,
            Terminado: 'Pedido esperando',
    });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <>
            <aside id="order">
                <div id="titlesAbove">
                    <h2>Pedido</h2>
                    <div id="tableInfo">
                        <h3>Garzon 1</h3>
                        <h3>Mesa 2</h3>
                    </div>
                    <div>{cartItems.length === 0 && <h3 id="emptyOrder">Orden vacía</h3>}</div>
                    <form onSubmit={(e) => toFirebase(e)}>
                    {cartItems?.map((item) => {
                        return(<div key={item.id} className="itemsInOrder">
                        <p>{item.name}</p>
                        <div>
                            <button type="button" onClick={() => addProduct(item)} className="changeNumberItem" id="add">+</button>
                            <button
                                type="button"
                                onClick={() => removeProducts(item)}
                                className="changeNumberItem"
                                id="deduct"
                                >-</button>
                        </div>
                        <div>
                            <p>
                            {item.count} x {item.price}
                            </p>
                            <button type="button" onClick={() => deleteProducts(item)} className="changeNumberItem" id="add">Eliminar</button>
                        </div>  
                    </div>
                )})
                }
                <div>
                    <button  type='submit' className="interactionWithOrder" id="sendOrder">Enviar Pedido</button>
                </div>
                    </form> 
                    <div>
                        <div>
                            <h3>Total de la orden:</h3>
                            <p>{itemsPrice}</p>
                            <button type="button" onClick={removeAllProducts} className="interactionWithOrder" id="eraseOrder">Borrar Pedido</button>
                        </div>      
                    </div>
                </div>
            </aside>
        
        </>
    )
}

export default Orders;
