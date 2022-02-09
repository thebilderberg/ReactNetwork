import React from "react";
import myPicture from "./playstation.png";
import style from "./Header.module.css";






const Header = () => {
    return (
        <div className={style.header}>
            <img className={style.ImgHeader} src={myPicture} alt="xxx"/>
        </div>
    );
}




export default Header;