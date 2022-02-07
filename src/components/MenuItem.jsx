import React from "react";
import "../components/css/MenuItem.css"

const MenuItem = ({totalItems, addProduct}) => {
    return (
        <section className="cards">
            {totalItems.map((item) => {
            const { id, name, img, price } = item;
            return (
                <div className="card" key={id}>
                    <div className="card_image-container">
                    <img src={img} alt={name} className="photo" />
                    <div className="card_content">
                        <p className="card_title text--medium">{name}</p>
                        <div className="card_info">
                            <p className="chileanCurrency">$</p><p className="text--medium">{price}</p>
                            <button onClick={() => addProduct(item)} className="card_price text--medium">Agregar Pedido</button>
                        </div>
                    </div>
                </div>
                </div>
                    );
                })}
        </section>
    );
};

export default MenuItem;