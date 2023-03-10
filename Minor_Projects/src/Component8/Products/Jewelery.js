import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Jewelery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>JEWELLERY COMPONENT</h4>
      {data.length > 0 ? (
        <ul>
          {data.map((element, index) => {
            return (
              <NavLink to={`/productdetails/${element.id}`}>
                <li key={index + 1}>{element.title}</li>
              </NavLink>
            );
          })}
        </ul>
      ) : (
        <h3>...LOADING...</h3>
      )}
    </div>
  );
}
