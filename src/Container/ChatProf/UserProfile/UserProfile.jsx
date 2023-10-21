import React from "react";
import style from "./UserProfile.module.css";
import {NavLink} from "react-router-dom";
import UserImg from "./user.png";

const UserProfile = (props) => {
    return (
        <div className={style.UserProfileBox}>
               <div>
                   <NavLink className={style.ChatLink} to={"/profile/chat/"+ props.id}><img className={style.UserImgClass} src={UserImg} alt="xxx"/>{props.name}</NavLink>
               </div>
            <div>{props.message}</div>
        </div>
    );
}



export default UserProfile;