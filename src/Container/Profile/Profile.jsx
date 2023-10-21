import React from "react";
import style from "./Profile.module.css";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import {Outlet} from "react-router-dom";



const Profile = () => {
    return (
            <div className={style.allProfileBox}>
                <Outlet/>
                <NavigationProfile/>
            </div>
    );
}



export default Profile;