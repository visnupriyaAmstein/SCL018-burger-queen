import React from "react";

const MenuItem = ({totalItems, addProduct}) => {
    return (
    <section>
    <div className="section-center">
        {totalItems.map((item) => {
        const { id, name, img, price } = item;
        return (
            <div key={id} className="menu-item">
                <img src={img} alt={name} className="photo" />
                <div className="item-info">
                    <header>
                    <h4>{name}</h4>
                    <p className="price">{price}</p>
                    <button onClick={() => addProduct(item)} className="btnOrders">Agregar Pedido</button>
                    </header>
                </div>
            </div>
        );
        })}
    </div>
    </section>
    );
};

export default MenuItem;
