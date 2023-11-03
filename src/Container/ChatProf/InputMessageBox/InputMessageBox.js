import React from "react";
import style from "./InputMessageBox.module.css";


const InputMessageBox = (props) => {

    let NewTextMessage = React.createRef();

    let enterMessageButton = () => {
        let text = NewTextMessage.current.value;
        props.addMessage(text);
        NewTextMessage.current.value = '';
    }

    return (
        <div className={style.inputBoxClass}>
            <input  ref={NewTextMessage} className={style.inputClass} type="text"/>
            <button className={style.buttonEnterClass} onClick={enterMessageButton}>Enter</button>
        </div>
    );
}



export default InputMessageBox;