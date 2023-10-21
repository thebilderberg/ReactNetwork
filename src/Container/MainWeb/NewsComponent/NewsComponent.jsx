import React, {useState} from "react";
import style from "./NewsComponent.module.css";
import userImg from "./user.png"



const NewsComponent = ({like, post, name}) => {

    const [liked,setLike]=useState(like);

    let likePlus = () => {
        setLike(liked+1);
    };

    return (
        <div className={style.PostBox}>
            <div><img className={style.ImgUser} src={userImg} alt="xxx"/></div>
            <div>{name}</div>
            <div>{post}</div>
            <div className={style.LikerClass} onClick={likePlus}>🧡 {liked}</div>
        </div>
    );
}



export default NewsComponent;