import React from "react";

const Categories = ({ categories, filterMenu, initialCategory }) => {
return (
    <div className="btn-container">
    {categories.map((category, index) => {
        return (
        <button 
        key={index} 
        className={`${
            initialCategory === category ? "filter-btn active" : "filter-btn"
        }`}
        onClick={() => filterMenu(category)}>
        {category}
        </button>
        );
    })}
    </div>
);
};

export default Categories;

