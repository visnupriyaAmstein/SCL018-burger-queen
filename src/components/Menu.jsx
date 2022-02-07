import React, {useState} from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
import dataMenu from "./dataMenu.json";
import Orders from "./Orders";
import "../components/css/Menu.css"
import imgLogo from "../img/logo1.png";
import BtnLogOut from "./login/LogOut";
import { Link } from 'react-router-dom';

const Menu = () => {
    
    const menus = dataMenu.products;
    const allCategories = ['Todos',...new Set(menus.map((item) => item.category))];
    const [totalItems, setTotalItems] = useState(menus);
    const [initialCategory, setInitialCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);
    const [ordenState, setOrdenState] = useState({
        listOfProducts: dataMenu.products,
        cart: []
    });
    const [show, showMenu]= useState(false);
    
    const filterMenu = (category) => {
        setInitialCategory(category);
        if (category === 'Todos') {
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
        <div className="main">
            <section className="menu section">
                <div className="logo">
                    <img src={imgLogo}/>
                </div>
                <div className="btnLogOutAndOrdersReady">
                        <BtnLogOut/>
                        <Link to="/orderReady"
                        className="px-3 py-2 flex items-center"
                        alt="Acceso a lista de entrega">
                        <i className="far fa-check-circle opacity-75 fa-3x"></i>
                        </Link>
                    </div>
                <header className="title">
                    <h2>MENU</h2>
                </header>
            </section>
            <div className="fullScreen">
                <div className="navMenu">
                    <Categories
                    categories={categories}
                    initialCategory={initialCategory}
                    filterMenu={filterMenu}
                    />
                </div>
                <main>
                    <MenuItem addProduct={addProducts} totalItems={totalItems} />
                    <Orders addProduct={addProducts} cartItems={ordenState.cart} removeProducts={removeProducts} removeAllProducts={removeAllProducts} deleteProducts={deleteProducts} show={show} showMenu={showMenu}/>
                </main>
            </div>
        </div>
    );
}
export default Menu;
