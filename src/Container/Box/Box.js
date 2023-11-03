import React from "react";
import Staff from "./Staff/Staff";


const Box = (props) => {
    return (
        <div className="Box2">
            <Staff name={props.userInfoObjectGod[0].name} firstName={props.userInfoObjectGod[0].firstName}/>
            <Staff name={props.userInfoObjectGod[1].name} firstName={props.userInfoObjectGod[1].firstName}/>
            <Staff name={props.userInfoObjectGod[2].name} firstName={props.userInfoObjectGod[2].firstName}/>
            <Staff name={props.userInfoObjectGod[3].name} firstName={props.userInfoObjectGod[3].firstName}/>
            <Staff name={props.userInfoObjectGod[4].name} firstName={props.userInfoObjectGod[4].firstName}/>
        </div>
    );
}




export default Box;