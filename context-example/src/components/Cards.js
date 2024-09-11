import React from "react";

const Cards = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.shortDescription}</p>
      <p>{props.product.rating}</p>
      <p>{props.product.price}</p>
    </div>
  );
};

export default Cards;
