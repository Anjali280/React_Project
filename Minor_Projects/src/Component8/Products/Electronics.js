import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import electronicAction from "./ReduxPipeline/electronicsAction";
import { useDispatch } from "react-redux";

function Electronics(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        electronicAction(data, dispatch);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>ELECTRONICS COMPONENT</h4>
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

export default Electronics;
