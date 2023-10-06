import React from "react";
import Menu from "./Menu/Menu";
import Box from "./Box/Box";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import styles from "./Container.module.css";
import {Route, Routes} from "react-router-dom";
import ContentBox from "./Profile/ContentBox/ContentBox";
import MainWeb from "./MainWeb/MainWeb";
import ChatProf from "./ChatProf/ChatProf";
import Data from "./Data/Data";


const Container = (props) => {
    return (
            <div className={styles.container}>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Profile/>}>
                        <Route path="/main" element={<MainWeb mainMenu={props.states.mainMenu}
                                                              addPost={props.addPost}/>}/>
                        <Route path="/main/sett" element={<Settings/>}/>
                        <Route path="/main/profile" element={<ContentBox/>}/>
                        <Route path="/main/chat" element={<ChatProf chats={props.states.chats}
                                                                    addMessage={props.addMessage}/>}/>
                    </Route>
                    <Route path="/data" element={<Data/>}/>
                    <Route path="/staff" element={<Box userInfoObjectGod={props.states.staff.userInfoObjectGod}/>}/>
                </Routes>
            </div>
    );
}


export default Container;