import React from "react";

const MenuItem = ({totalItems}) => {
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
