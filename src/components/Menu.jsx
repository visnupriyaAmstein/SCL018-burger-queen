import React, {useState} from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
import dataMenu from "./dataMenu.json";
import Orders from "./Orders";
import "../components/css/Menu.css"

const Menu = () => {
    
    const menus = dataMenu.products;
    const allCategories = ['all',...new Set(menus.map((item) => item.category))];

    const [totalItems, filterItems] = useState(menus);
    const [initialCategory, finalCategory] = useState("");
    const [categories, filterCategories] = useState(allCategories);
    
    const filterMenu = (category) => {
        finalCategory(category);
        if (category === 'all') {
            filterItems(menus);
            return;
        } else {
            const newItems = menus.filter((item) => item.category === category);
            filterItems(newItems); 
        } 
    };

    return (
        <main className="main">
        <section className="menu section">
            <div className="title">
                <h2>Menu</h2>
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
                <MenuItem totalItems={totalItems} />
            </section>
            <section className="orders">
                <Orders/>
            </section>
        </div>
        </main>
    );
}
export default Menu;