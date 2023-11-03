import Achievements from "./Achievements/Achievements";
import iconProfile from "./llonAvatar.jpg";
import ratingImg from "../rating.png";
import React from "react";
import style from "./ContentBox.module.css";


const ContentBox = () => {
    return (
        <div className={style.AllProfile}>
            <div className={style.Header}> </div>
            <Achievements/>
            <div className={style.AvatarBox}>
                <img className={style.AvatarIconImg} src={iconProfile} alt="xxx"/>
            </div>
            <div className={style.RatingBox}>
                <img className={style.RatingImgClass} src={ratingImg} alt="xxx"/>
            </div>
            <div className={style.Info}>
                <div>
                    info:
                </div>
                <div className={style.boxTextInfo}>
                    <div className={style.textInfo}>Но дружбы нет и той меж нами. Все предрассудки истребя, мы почитаем всех нулями, а единицами - себя. Мы все глядим в Наполеоны, двуногих тварей миллионы. Для нас орудие одно - нам чувство дико и смешно.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentBox;