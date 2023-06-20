import React from 'react';
import styles from './MainCard.module.css';
import BTCardimg from '../../../img/Pimg14.jpg'
import BTCardimg1 from '../../../img/Pimg15.jpg'
import BTCardimg2 from '../../../img/Pimg16.jpg'
import BTCardimg3 from '../../../img/Pimg17.jpg'
import BTCardimg4 from '../../../img/Pimg18.jpg'




const BTbackgroundArr = [BTCardimg, BTCardimg1, BTCardimg2, BTCardimg3, BTCardimg4];
const randomIndex = Math.floor(Math.random() * BTbackgroundArr.length);
const BTbackgroundImg = BTbackgroundArr[randomIndex];

function BTCardImg(props){
    return (
        <div className={styles.MainBTCard_ImgWrapper}>
                <img className={styles.BTCardPimg} src={BTbackgroundImg} />
        </div>
    )

   
}


export default BTCardImg;