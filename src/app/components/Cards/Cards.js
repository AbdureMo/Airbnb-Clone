import React from "react";
import Card from "./Card";
import "./styles.css";
function Cards({ list, list2 }) {
  return (
    <div className="cards-flex flex justify-center items-center py-4 gap-4 flex-wrap ">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
