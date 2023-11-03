import React from "react";
import style from "./Profile.module.css";
import ContentBox from "./ContentBox/ContentBox";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import {Outlet} from "react-router-dom";
import Settings from "../Settings/Settings";



const Profile = () => {
    return (
            <div className={style.allProfileBox}>
                <Outlet/>
                <NavigationProfile/>
            </div>
    );
}



export default Profile;