import React from "react";
import imgSrc from "./dog.jpg";

import { useParams } from "react-router-dom";

function Dog() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <img src={imgSrc} alt="A dog" height="200" />
    </div>
  );
}

export default Dog;
