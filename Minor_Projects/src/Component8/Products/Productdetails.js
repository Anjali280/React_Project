import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Productdetails(props) {
  const [state, setState] = useState({});
  const parameter = useParams();
  //   console.log(parameter);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${parameter.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{state.category}</h1>
      <img src={state.image} alt="pic" width={300} height={300} />
      <h2>{state.title}</h2>
      <p>${state.price}</p>
    </div>
  );
}

export default Productdetails;
