import React from 'react';
import styles from './MainCard.module.css';
import BCardimg from '../../../img/Pimg10.jpg'
import BCardimg1 from '../../../img/Pimg6.jpg'
import BCardimg2 from '../../../img/Pimg11.jpg'
import BCardimg3 from '../../../img/Pimg12.jpg'
import BCardimg4 from '../../../img/Pimg19.jpg'




const BbackgroundArr = [BCardimg, BCardimg1, BCardimg2, BCardimg3, BCardimg4];
const randomIndex = Math.floor(Math.random() * BbackgroundArr.length);
const BbackgroundImg = BbackgroundArr[randomIndex];

function BCardImg(props){
    return (
        <div className={styles.MainBCard_ImgWrapper}>
                <img className={styles.BCardPimg} src={BbackgroundImg} />
        </div>
    )

   
}


export default BCardImg;