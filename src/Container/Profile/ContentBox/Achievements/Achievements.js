import React from "react";
import styles from "./Achievements.module.css"
import oneAchievement from "./1.png"
import twoAchievement from "./2.png"
import threeAchievement from "./3.png"

const Achievements = () => {
    return (
        <div className={styles.AchievementsBoxUp}>
            <div className={styles.AchievementsBox}>
                <img className={styles.AchievementsImg} src={oneAchievement} alt="xxx"/>
                <img className={styles.AchievementsImg} src={twoAchievement} alt="xxx"/>
                <img className={styles.AchievementsImg} src={threeAchievement} alt="xxx"/>
            </div>
        </div>
    );
}



export default Achievements;