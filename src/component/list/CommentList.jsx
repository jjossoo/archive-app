import react from "react";
import styles from "./CommentList.module.css";
import Textarea from "../ui/Textarea";
import Comment from "../ui/comment";

function CommentList(props){
    return(
        <div className={styles.CommentList}>
            <Textarea
            title="댓글(3)"
            placeholder="댓글을 작성해주세요"
            Button = "작성하기"
            >
            </Textarea>
            <Comment day="2023/08/27" name="박건도" context="다른 사람들의 댓글도 읽어보니 저만큼 많은 사람들이 공감하고 있다는 게 느껴져요."></Comment>
            <Comment day="2023/08/27" name="박건도" context="오늘도 열심히 공부하고 디자인에 노력해봐야겠어요."></Comment>
            <Comment day="2023/08/27" name="박건도" context="더 많은 사람들이 이런 유용한 정보를 알게 되기를 바랍니다. 감사합니다!"></Comment>
        </div>
    )
}

export default CommentList;