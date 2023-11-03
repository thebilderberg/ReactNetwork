import React from "react";
import styles from "./Settings.module.css";
import {NavLink} from "react-router-dom";


const Settings = () => {
    return (
        <div className={styles.Settings}>
            <div className={styles.Container}>
                <div className={styles.Sound}>
                    <div>Sound</div>
                    <div>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={styles.Private}>
                    <div>Private profile</div>
                    <div>
                        <select>
                            <option value="1">Unavailable</option>
                            <option value="2">Only friends</option>
                            <option value="3">For everyone</option>
                        </select>
                    </div>
                </div>
                <div className={styles.Theme}>
                    <div>Color Theme</div>
                    <div>
                        <select>
                            <option value="1">Red</option>
                            <option value="2">Blue</option>
                            <option value="3">Yellow</option>
                        </select>
                    </div>
                </div>
                <div className={styles.LinkBackProfile}>
                    <NavLink to="/main">Back</NavLink>
                </div>
            </div>
            <div></div>
        </div>
    );
}




export default Settings;