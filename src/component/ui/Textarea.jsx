import react from "react";
import styles from "./Textarea.module.css";
import DropDown from "../ui/DropDown";

// 필터 버튼
function TextArea(props){

    return(
        <div className={styles.TextAreawrap}>
            <div>
                {props.title?<p>{props.title}</p>:null}
            </div>
            <div>
                {props.subTitle?<p>{props.subTitle}</p>:null}
                <div className={styles.flexWrap}>
                    <div className={styles.flex}>
                        {props.Drop ? <DropDown/>:
                        <textarea className={styles.TextArea}
                                placeholder={props.placeholder}
                                value={props.value}
                                style={{'--height' : props.height + 'px'}}
                        >
                        </textarea>}
                        {props.Button?<div className={styles.Button}>{props.Button}</div>:''
                        
                        }
                    </div>
                    <div>
                        {props.children}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default TextArea;