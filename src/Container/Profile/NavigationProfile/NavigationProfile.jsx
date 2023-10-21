import style from "./NavigationProfile.module.css";
import React from "react";
import settingsImg from "./settingProfile.png";
import tutorialImg from "./videoTutorials.png";
import userImg from "./user.png";
import chatImg from "./chat.png";
import {NavLink} from "react-router-dom";




const NavProfile = () => {
    return (
        <nav className={style.navigatorProfile}>
            <div>
                <NavLink to="/main/profile"><img className={style.settingProfImgClass} src={userImg} alt=""/></NavLink>
            </div>
            <div>
                <img className={style.tutorialImgClass} src={tutorialImg} alt="xxx"/>
            </div>
            <div>
                <NavLink to="/main/chat"><img className={style.chatImgClass} src={chatImg} alt="xxx"/></NavLink>
            </div>
            <div>
                <NavLink to="/main/sett"><img className={style.settingProfImgClass} src={settingsImg} alt=""/></NavLink>
            </div>
        </nav>
    );
}



export default NavProfile;