import react, {useState, useEffect} from "react";
import styles from "./DropDown.module.css";
import drop from '../../img/drop.png';
import drop2 from '../../img/drop2.png';
import DropButton from "../ui/DropButton";

// 필터 버튼
function DropDown(props){

    const [toggle, setToggle] = useState(true);
    const [title, setTitle] = useState('선택해주세요');
    function ButtonToggle(e){
        e.stopPropagation();
        setToggle(!toggle)
    }
    function settitle(e){
        // setTitle();
        console.log('asd')
    }

    const context = ["UI/UX","3D","그래픽 디자인","영상/모션그래픽","디지털 아트","브랜딩 디자인"];

    const nameList = context.map(function(data){
        return(
            <DropButton title={data}></DropButton>
        )
    })
   
    return(
        <div  className={`${toggle ? '':styles.LineBlue} ${styles.dropDownWrap}`}>
            <div className={styles.dropDown} onClick={ButtonToggle}>
                <div><p>{title}</p><img src={toggle?drop:drop2}></img></div>
            </div>
            <div className={`${toggle ? styles.dropDownContextToggle:''} ${styles.dropDownContext}`}
                >
                    {nameList}
            </div>
        </div>
    )
}

export default DropDown;