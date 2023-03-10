/*For Todo Components
import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todo />
    </div>
  );
}

export default App;
*/

/*  """FOR RENDERING COMPONENT 7 & COMPONENT8 & REDUX """*/
import Header from "./Component7/Header";
import Auth from "./Component7/Auth";
import { useState } from "react";
import loginContext from "./Component7/Context";
//
import React from "react";
import Counter from "./Component3/Counter";
import ReactInputBox from "./Component4/ReactInputBox";
import { Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./Component8/pageNotFound";
import Product from "./Component8/Products/Product";
import Electronics from "./Component8/Products/Electronics";
import Jewelery from "./Component8/Products/Jewelery";
import MenClothing from "./Component8/Products/MenClothing";
import WomenClothing from "./Component8/Products/WomenClothing";
import Productdetails from "./Component8/Products/Productdetails";
import PrivateRoute from "./Component8/PrivateRoute/PrivateRoute";

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };

  return (
    <div>
      <div></div>
      <div>
        <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
          <Header />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route
              path="/counter"
              element={
                <PrivateRoute>
                  <Counter />
                </PrivateRoute>
              }
            />
            <Route
              path="/reactInputBox"
              element={state.isLoggedIn ? <ReactInputBox /> : <Auth />}
            />
            <Route
              path="/products"
              element={state.isLoggedIn ? <Product /> : <Auth />}
            >
              <Route path="" element={<Navigate to="electronic" />} />
              <Route path="electronic" element={<Electronics />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="menClothing" element={<MenClothing />} />
              <Route path="womenClothing" element={<WomenClothing />} />
            </Route>
            <Route path="/productdetails/:id" element={<Productdetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </loginContext.Provider>
      </div>
    </div>
  );
}

export default App;
