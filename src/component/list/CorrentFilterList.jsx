import react, {useState, useEffect} from "react";
import styles from "./FilterList.module.css";
// import dataCopy from "../../dummy.json";
import FilterButton from "../ui/FilterButton";

// 버튼들 여러개, 년도, 전공 각각

function CorrentFilterList(props){

    useEffect(() => {
    }, [props.lowData])
    
    const filterData = props.filterListdata.context;

    const nameList = filterData.map(function(filterButtondata){

        return(
                <FilterButton key={filterButtondata.key} context ={filterButtondata.contextTitle} lowData={props.lowData} setLowData={props.setLowData}
                selected = {filterButtondata.selected}/>
        )
    })

    return(
        <div className={styles.FilterList}>
            {nameList}
        </div>
    )
}
// https://developer-talk.tistory.com/246
export default CorrentFilterList;