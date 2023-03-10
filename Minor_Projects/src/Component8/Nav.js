import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  var divStyle = {
    backgroundColor: "black",
    padding: "13px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  };
  var astyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
  };
  return (
    <div className="nav" style={divStyle}>
      <Link to="/" style={astyle}>
        Home
      </Link>

      <Link to="/reactInputBox" style={astyle}>
        ReactInputBox
      </Link>

      <Link to="counter" style={astyle}>
        Counter
      </Link>

      <Link to="products" style={astyle}>
        Products
      </Link>
    </div>
  );
}

export default Nav;
