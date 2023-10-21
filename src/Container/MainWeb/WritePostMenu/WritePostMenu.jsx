import React from "react";
import style from "./WritePostMenu.module.css"



const WritePostMenu = (props) => {

    let NewPostText = React.createRef();

    let funcWriteNewPost = () => {
        let text = NewPostText.current.value;
        props.addPost(text);
        NewPostText.current.value = '';
    }


    return (
        <div className={style.InputBox}>
            <div><input  ref={NewPostText} className={style.InputWindow} type="text"/></div>
            <div className={style.InputButtonDiv}><button className={style.InputButton}
                                                          onClick={funcWriteNewPost}>Enter</button></div>
        </div>
    );
}


export default WritePostMenu;