import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map(function (curElem) {
      return curElem.category;
    })
  ),"All"
];

function Resturant() {
  const [menuData, setmenuData] = useState(Menu);
  const [updatedList, setUpdatedList] = useState(uniqueList);

  const ItemFilter = (category) => {
    if(category === "All"){
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar ItemFilter={ItemFilter} updatedList={updatedList} />
      <Card menuData={menuData} />
    </>
  );
}

export default Resturant;
