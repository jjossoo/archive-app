import react, {useState, useEffect} from "react";
import styles from "./Filters.module.css";
import logo from '../../img/Logo.png';
import {FilterList,CurrentFilterList} from '../list/FilterList';
import CorrentFilterList from '../list/CorrentFilterList';

// 필터창

function Filters(props){

    const openFilterData = props.lowData;
    const closeFilterData = [props.resultData];

    const filterData = props.open?openFilterData:closeFilterData;

    const list = filterData.map(function(filterListdata){
        return(
            <div>
                <div className={styles.title}>
                    {props.open?filterListdata.title:'선택된 카테고리'}
                </div>
                {
                    props.open?
                    <FilterList key = {filterListdata.key} filterListdata={filterListdata} setLowData={props.setLowData} open = {props.open} lowData={props.lowData} onClick={props.onClick}></FilterList>
                    :<CurrentFilterList filterListdata = {filterListdata}></CurrentFilterList>
                }
            </div>
        )
    })

    return(
        <div className={styles.filters}>
            <div className={styles.button}>{props.children}</div>
            {list}
        </div>
    )
}

export default Filters;