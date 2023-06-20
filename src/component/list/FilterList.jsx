import react, {useState, useEffect} from "react";
import styles from "./FilterList.module.css";
// import dataCopy from "../../dummy.json";
import FilterButton from "../ui/FilterButton";
import ScrollContainer from 'react-indiana-drag-scroll'

// 버튼들 여러개, 년도, 전공 각각

function CurrentFilterList(props){
    const filterData = props.filterListdata;

    const CurrentNameList = 
        filterData.map(function(filterButtondata){
            return(
                    <FilterButton selected={true} context = {filterButtondata}>
                    </FilterButton>
            )})

    return(
            <ScrollContainer className={styles.scrollcontainer}>
                <div className={styles.FilterList}>
                        {CurrentNameList}
                </div>
            </ScrollContainer>

    )
}

function FilterList(props){

    useEffect(() => {
    }, [props.lowData])
    
    const filterData = props.filterListdata.context;
    // 목록의 위치를 찾는 변수
    const findList = props.filterListdata.key - 1


    const nameList = 
            filterData.map(function(filterButtondata){
            return(
                    <FilterButton key={filterButtondata.key} context ={filterButtondata.contextTitle} lowData={props.lowData} setLowData={props.setLowData}
                    selected = {filterButtondata.selected} onClick={function(){

                        let dataCopy2 = [...props.lowData];

                        

                        // 버튼의 위치를 찾는 변수
                        const findIndex = dataCopy2[findList].context.findIndex(element => element.contextTitle == filterButtondata.contextTitle);

                        
                        if(dataCopy2[findList].context[findIndex].selected){
                            dataCopy2[findList].context[findIndex] = {...dataCopy2[findList].context[findIndex], selected: false};
                        }else{
                            dataCopy2[findList].context[findIndex] = {...dataCopy2[findList].context[findIndex], selected: true};
                        }

                        console.log(filterData.length)

                        // 전체를 제외한 모든 버튼이 눌렸을때, 전체만 켜지고 모든 카테고리 꺼짐
                        if (dataCopy2[findList].context.slice(1, filterData.length).every(item => item.selected)) {
                            dataCopy2[findList].context.slice(1, filterData.length).forEach(item => {
                            item.selected = false;
                            });
                            dataCopy2[findList].context[0].selected = true;
                        }
                        
                        
                        // if(dataCopy2[0].context[1].selected && dataCopy2[0].context[2].selected && dataCopy2[0].context[3].selected && dataCopy2[0].context[4].selected && dataCopy2[0].context[5].selected && dataCopy2[0].context[6].selected){
                        //     dataCopy2[0].context[1] = {...dataCopy2[0].context[1] , selected: false}
                        //     dataCopy2[0].context[2] = {...dataCopy2[0].context[2] , selected: false}
                        //     dataCopy2[0].context[3] = {...dataCopy2[0].context[3] , selected: false}
                        //     dataCopy2[0].context[4] = {...dataCopy2[0].context[4] , selected: false}
                        //     dataCopy2[0].context[5] = {...dataCopy2[0].context[5] , selected: false}
                        //     dataCopy2[0].context[6] = {...dataCopy2[0].context[6] , selected: false}
                        //     dataCopy2[0].context[0] = {...dataCopy2[0].context[0] , selected: true}
                        // }

                        // 전체를 제외한 버튼이 하나라도 눌려졌을때, 전체는 선택 해제
                        if (dataCopy2[findList].context.slice(1, filterData.length).some(item => item.selected)) {
                            dataCopy2[findList].context[0].selected = false;
                        }

                        // 전체를 누르면 전체는 눌리고, 다른건 모두 해제
                        if (filterButtondata.contextTitle === '전체' && props.filterListdata.key === props.filterListdata.key) {
                            dataCopy2[findList].context.forEach((item, index) => {
                            dataCopy2[findList].context[index] = { ...item, selected: index === 0 };
                            });
                        }
                    
                        props.setLowData(dataCopy2)
                    }}/>  
            )}
        )
    
    const result = nameList
    // const result = props.open?nameList:null


    return(
            <div className={styles.FilterList}>
                {result}
            </div>
    )
}
// https://developer-talk.tistory.com/246
export {FilterList,CurrentFilterList};