import React from "react";
import style from "./Staff.module.css";
import imgIcon from "./avatar.png"
import {NavLink} from "react-router-dom";


const Staff = (props) => {
    return (
        <div className={style.Staff}>
            <div>
                <NavLink to="/staff/friend_profile"><img className={style.ImgIconPng} src={imgIcon} alt=""/></NavLink>
            </div>
            <div>{props.name}</div>
            <div>{props.firstName}</div>
            <div>{props.info}</div>
        </div>
    );
}



export default Staff;