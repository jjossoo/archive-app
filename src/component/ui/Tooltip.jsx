import react from "react";
import styles from "./Tooltip.module.css";

// 필터 버튼
function Tooltip(props){

    return(
        <div className={styles.tooltip}>
            {props.context}
        </div>
    )
}

export default Tooltip;