import React from "react";
import style from "./UserMessage.module.css";


const UserMessage = (props) => {
    return (
        <div className={style.Window}>
            <div className={style.Block}>{props.message}</div>
        </div>
    );
}



export default UserMessage;