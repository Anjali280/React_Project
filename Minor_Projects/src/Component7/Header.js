import { useContext } from "react";
import loginContext from "./Context";
import { Link } from "react-router-dom";

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
function Header(props) {
  const { state, fnLoggedOut } = useContext(loginContext);
  return (
    <div style={divStyle}>
      <div>
        <span style={{ fontSize: "25px" }}>React </span>
      </div>
      <div>
        <Link style={astyle} to="/Home">
          Home
        </Link>
        <Link style={astyle} to="/profile">
          Profile
        </Link>
        <Link style={astyle} to="/Products">
          Product
        </Link>
        <Link style={astyle} to="/Counter">
          Counter
        </Link>
        <Link style={astyle} to="/redux">
          Redux
        </Link>

        <span style={{ marginRight: "30px", color: "green", fontSize: "20px" }}>
          <b> {state.user}</b>
        </span>
        {state.isLoggedIn ? (
          <button
            style={{ marginRight: "50px" }}
            onClick={() => {
              fnLoggedOut();
            }}
          >
            Logout
          </button>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default Header;
