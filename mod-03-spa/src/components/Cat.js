import React from "react";
import imgSrc from "./cat.jpg";

function Cat(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.match.params.catName}</h2>
      <img src={imgSrc} alt="A cat" height="200" />
    </div>
  );
}

export default Cat;
