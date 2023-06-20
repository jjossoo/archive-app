import React from 'react';
import styles from './MainCard.module.css';
import BCardimg from '../../../img/BCard.png'
import { useNavigate } from "react-router-dom";


function BCard(props){
    const nav = useNavigate();

    return (
        // onClick={function(){nav("/ProjectPage")}
        <div onClick={function(){nav("/ProjectPage")}} className={styles.MainBCard_TextWrapper}>
            <div className={styles.MainBCard_Content}>
                <img className={styles.BCardimg} src={BCardimg} />
                <p className={styles.BCard_Content}>학생들 프로젝트 보러가기 〉</p>
            </div>
        </div>
    )
}

export default BCard;