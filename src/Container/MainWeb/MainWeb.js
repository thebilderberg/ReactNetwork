import React from "react";
import style from "./MainWeb.module.css";
import NewsComponent from "./NewsComponent/NewsComponent";
import WritePostMenu from "./WritePostMenu/WritePostMenu";


const MainWeb = (props) => {

    let NewsComponentsMassive =
        props.mainMenu.NewsData.map((obj) => <NewsComponent name={obj.name} post={obj.post} like={obj.likes}/>);

    return (
        <div className={style.MainWebContainer}>
            <WritePostMenu addPost={props.addPost}/>
            {NewsComponentsMassive}
        </div>
    );
}


export default MainWeb;

