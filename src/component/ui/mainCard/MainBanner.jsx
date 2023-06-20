import React from 'react';
import styles from './MainCard.module.css';
import BannerImg from '../../../img/Pimg1.jpg'
import BannerImg1 from '../../../img/Pimg2.jpg'
import BannerImg2 from '../../../img/Pimg3.jpg'
import BannerImg3 from '../../../img/Pimg4.jpg'
import BannerImg4 from '../../../img/Pimg5.jpg'

const backgroundArr = [BannerImg, BannerImg1, BannerImg2, BannerImg3, BannerImg4];
const randomIndex = Math.floor(Math.random() * backgroundArr.length);
const backgroundImg = backgroundArr[randomIndex];

function Banner(props){
    return (
        <div>
            <div className={styles.Main_BannerWrapper}>
            <img className={styles.Main_Bannerimg} src={backgroundImg} />
            </div>
        </div>
        
    )
}

export default Banner;