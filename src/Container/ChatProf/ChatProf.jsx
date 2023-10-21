import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import UserMessage from "./UserMessage/UserMessage";
import style from "./ChatProf.module.css";
import InputMessageBox from "./InputMessageBox/InputMessageBox";


const ChatProf = (props) => {

    let UserObjectData = props.chats.UserObject.map((data)=>
        <UserProfile name={data.nameUser} id={data.id}/>);

    let UserMessageData = props.chats.UserMessageData.map((data)=>
        <UserMessage message={data.message}/>);

    return (
        <div className={style.ChatProfBox}>
            <div className={style.UsersNicks}>
                {UserObjectData}
            </div>
            <div className={style.UserMessageBox}>
                <div>{UserMessageData}</div>
                <InputMessageBox addMessage={props.addMessage}/>
            </div>
        </div>
    );
}



export default ChatProf;