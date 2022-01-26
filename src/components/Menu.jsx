import React, {useState} from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
import dataMenu from "./dataMenu.json";
import Orders from "./Orders";
import "../components/css/Menu.css"

const Menu = () => {
    
    const menus = dataMenu.products;
    const allCategories = ['all',...new Set(menus.map((item) => item.category))];
    const [totalItems, setTotalItems] = useState(menus);
    const [initialCategory, setInitialCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);
    const [ordenState, setOrdenState] = useState({
        listOfProducts: dataMenu.products,
        cart: []
    });

    const filterMenu = (category) => {
        setInitialCategory(category);
        if (category === 'all') {
            setTotalItems(menus);
            return;
        } else {
            const newItems = menus.filter((item) => item.category === category);
            setTotalItems(newItems); 
        } 
    };
    
    const addProducts = (product) => {
        console.log("se agrego un producto",product);
        setOrdenState((prevState) => ({
            ...prevState, 
            cart: prevState.cart.find((cartItem) => cartItem.id === product.id)
            ? prevState.cart.map((cartItem) =>
                cartItem.id === product.id
                ? { ...cartItem, count: cartItem.count + 1 }
                : cartItem
            )
            : [...prevState.cart, { ...product, count: 1 }]
        }) )
    } 

    const removeProducts = (product) => {
        console.log("se quito un producto",product);
        setOrdenState((prevState) => ({
            ...prevState, 
            cart: prevState.cart.find((cartItem) => cartItem.id === product.id)
            ? prevState.cart.map((cartItem) =>
                cartItem.id === product.id
                ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1: 1 }
                : cartItem
            )
            : [...prevState.cart, { ...product, count: 1 }]
        }) )
    } 
    const removeAllProducts= () => {
        setOrdenState((prevState) => ({
            ...prevState,
            cart: []
        }));
    };

    const deleteProducts= (product) => {
        setOrdenState((prevState) => ({
            ...prevState,
            cart: prevState.cart.filter((cartItem) => cartItem.id !== product.id)
        }));
    };

    return (
        <main className="main">
        <section className="menu section">
            <div className="title">
                <h2>MENU</h2>
            <div className="underline"></div>
            </div>
            
        </section>
        <div className="fullScreen">
            <section id="menuTable">
                <Categories
                categories={categories}
                initialCategory={initialCategory}
                filterMenu={filterMenu}
                />
                <MenuItem addProduct={addProducts} totalItems={totalItems} />
            </section>
            <section className="orders">
                <Orders addProduct={addProducts} cartItems={ordenState.cart} removeProducts={removeProducts} removeAllProducts={removeAllProducts} deleteProducts={deleteProducts}/>
            </section>
        </div>
        </main>
    );
}
export default Menu;
