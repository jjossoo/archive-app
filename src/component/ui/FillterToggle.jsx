import react from "react";
import styles from "./FillterToggle.module.css";
import toggle from '../../img/toggle.png';

// 필터 버튼
function FilterToggle(props){

    return(
        <div className={styles.FilterToggle} onClick={props.onClick}>
            {props.open?<p>닫기</p>:<div><p>작품에 필터 적용하기</p><img src={toggle} alt="" /></div>}
            <div className={styles.box}></div>
        </div>
    )
}

export default FilterToggle;