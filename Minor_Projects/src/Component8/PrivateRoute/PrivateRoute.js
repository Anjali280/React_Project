import React from "react";
import { useContext } from "react";
import loginContext from "../../Component7/Context";
import Auth from "../../Component7/Auth";

function PrivateRoute(props) {
  const { state } = useContext(loginContext);
  if (state.isLoggedIn) {
    return props.children;
  } else {
    return <Auth />;
  }
}

export default PrivateRoute;
