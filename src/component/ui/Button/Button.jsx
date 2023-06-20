import React, { useState } from 'react';
import styles from "./Button.module.css";

// 필터 버튼
function ButtonUI(props){

    const [push, setPush] = useState(false);    

    return(
        <div style={{display:"inline-block"}}>
            <button onClick={() => (push ? setPush(false) : setPush(true))} className={`${styles.filterButton} ${push?styles.toggle:styles.notToggle}`}>
            {props.text}
            </button>
        </div>
    )
}

export default ButtonUI;