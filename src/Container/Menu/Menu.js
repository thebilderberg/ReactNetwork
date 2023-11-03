import React from "react";
import "./Menu.module.css";
import styles from "./Menu.module.css"
import {NavLink} from "react-router-dom"





const Menu = () => {
    return (
        <nav>
            <div>
                <NavLink to="/main">News</NavLink>
            </div>
            <div>
                <NavLink to="/staff">Staff</NavLink>
            </div>
            <div>
                <NavLink to="/data">Data</NavLink>
            </div>
        </nav>
    );
}




export default Menu;