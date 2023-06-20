import react from "react";
import styles from "./comment.module.css";

// 필터 버튼
function Comment(props){

    return(
        <div className={styles.comment}>
            <div className={styles.top}>
                <div>{props.day}</div>
                <div>삭제</div>
            </div>
            <div className={styles.bottom}>
                <div>From.{props.name}</div>
                <div>{props.context}</div>
            </div>
        </div>
    )
}

export default Comment;