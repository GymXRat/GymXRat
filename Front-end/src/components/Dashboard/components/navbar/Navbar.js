import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { Switch,Route } from "react-router-dom";
import Home from "../../../Home/Home";
import { Router } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  const [isUser, setIsUser] = useState("");
  const [isUserRole, setIsUserRole] = useState("");

  useEffect(() => {
    setIsUser(localStorage.getItem("name"));
    setIsUserRole(localStorage.getItem("role"));
  }, []);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    history.push("/signin");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light vavProp">
      <div className="container-fluid">
        <Link className="btn btn-info " to="/Home">
          <b className="text-white">GymXRat</b>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Welcome {isUser}</a>
          </li>
        </ul>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav rightMost ">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={logout}
            >
              Logout
            </button>
          </ul>
          
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
