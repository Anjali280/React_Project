import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Product.css";

export default function Product() {
  return (
    <div className="container">
      <div>
        <Link to="electronic" style={{ color: "white" }}>
          Electronics
        </Link>
        <Link to="jewelery" style={{ color: "white" }}>
          Jewelery
        </Link>
        <Link to="menClothing" style={{ color: "white" }}>
          MenClothing
        </Link>
        <Link to="womenClothing" style={{ color: "white" }}>
          WomenClothing
        </Link>
      </div>
      <div>
        <h3>
          <Outlet />
        </h3>
      </div>
    </div>
  );
}
