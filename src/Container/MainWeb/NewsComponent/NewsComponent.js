import React, {useState} from "react";
import style from "./NewsComponent.module.css";
import userImg from "./user.png"



const NewsComponent = (props) => {

    const [like,setLike]=useState(props.like);

    let likePlus = () => {
        setLike(like+1);
    };

    return (
        <div className={style.PostBox}>
            <div><img className={style.ImgUser} src={userImg} alt="xxx"/></div>
            <div>{props.name}</div>
            <div>{props.post}</div>
            <div className={style.LikerClass} onClick={likePlus}>🧡 {like}</div>
        </div>
    );
}



export default NewsComponent;