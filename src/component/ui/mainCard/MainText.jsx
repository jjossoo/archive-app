import React from 'react';
import styles from './MainCard.module.css';
import Resumeimg from '../../../img/Checklist.png';

function Text(props){
    return (
        <div className={styles.Main_Text}>
            <div className={styles.Main_TextWrapper}>
                <p className={styles.Project_Content}>오늘 한국공학대학교<br></br>디자이너들의</p>
                <p className={styles.Project_Text}>작품 {props.project}개</p>
                <p className={styles.Resume_Text}>이력서 {props.resume}개</p>
                <p className={styles.Resume_Content}>가 올라왔어요.</p>
            </div>

            <div className={styles.Main_Resume}>
                <img className={styles.Main_Resumeimg} src={Resumeimg} />
            </div>
        </div>
        
    )
}

export default Text;