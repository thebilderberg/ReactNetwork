import React from "react";
import SearchX from './contains/Search/Search.jsx';
import Head from './contains/Head/Head.jsx';
import Filter from './contains/Filter/Filter.jsx';
import ListBox from './contains/list/ListBox/ListBox.jsx';
import CreateDelListComp from "./contains/CreateDelListComp/CreateDelListComp.jsx";
import style from "./Data.module.css";



const Data = (props) => {
    return (
            <div className={style.Key}>
                <div></div>
                <div>
                    <Head/>
                    <SearchX/>
                    <Filter/>
                    <ListBox dataCalc={props.dataCalc}
                             statusZP={props.statusZP}/>
                    <CreateDelListComp/>
                </div>
                <div></div>
            </div>
    );
}



export default Data;