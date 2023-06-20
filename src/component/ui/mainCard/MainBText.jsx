import React from 'react';
import styles from './MainCard.module.css';
import { useNavigate } from "react-router-dom";


function BText(props){
    const nav = useNavigate();

    return (
        <div onClick={function(){nav("/StudentPage")}} className={styles.BCard_Text}>
                <p className={styles.BCard_Content}>학생 소개 보러가기 〉</p>
        </div>
        
    )
}

export default BText;