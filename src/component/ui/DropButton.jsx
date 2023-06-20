import react from "react";
import styles from "./DropButton.module.css";

// 필터 버튼
function DropButton(props){
    return(
        <div className={styles.Button}>
            {props.title}
        </div>
    )
}
export default DropButton;