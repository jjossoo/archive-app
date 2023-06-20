import react, {useState, useEffect} from "react";

import styles from "./FilterButton.module.css";


// 필터 버튼
function FilterButton(props){
    
    return(
        <div className={props.selected?styles.FilterButton:styles.FilterButtonnone} onClick={props.onClick}
        >
            {props.context}
        </div>
    )
}

export default FilterButton;