import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import Card from "./Card";

function Resturant() {
  const [menuData, setmenuData] = useState(Menu);

  const ItemFilter = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => {
              ItemFilter("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              ItemFilter("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              ItemFilter("evening");
            }}
          >
            Eve_Snacks
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              ItemFilter("dinner");
            }}
          >
            Dinner
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              setmenuData(Menu);
            }}
          >
            All
          </button>
        </div>
      </nav>
      <Card menuData={menuData} />
    </>
  );
}

export default Resturant;
