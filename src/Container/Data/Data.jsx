import React from "react";
import {Outlet} from "react-router-dom";
import Settings from "../Settings/Settings";
import Menu from './contains/Menu/Menu.jsx';
import Header from './contains/Header/Header.jsx';
import Search from './contains/container/Search/Search.jsx';
import Head from './contains/container/Head/Head.jsx';
import Filter from './contains/container/Filter/Filter.jsx';
import ListBox from './contains/container/list/ListBox/ListBox.jsx';



const Data = () => {
    return (
            <div>
                <Head/>
                <Search/>
                <Filter/>
                <ListBox/>
            </div>
    );
}



export default Data;