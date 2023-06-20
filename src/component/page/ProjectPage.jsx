import react, {useState, useEffect} from "react";
import data from "../../dummy.json";
import studentData from "../../studentData.json";
import Filters from "../ui/Filters";
import FilterToggle from "../ui/FillterToggle";
import ProjectCardList from "../list/ProjectCardList";
import styles from "./ProjectPage.module.css";


function ProjectPage(props){
    const [toggle, setToggle] = useState(false)
    const [top, setTop] = useState(-210)
    const [lowData, setLowData] = useState(data)

    // 필터 아래에 표시되는 값들
    const [resultData, setResultData] = useState(["2018","2019","2020","2021","2022","2023","미디어디자인","산업디자인","UI/UX","3D","그래픽 디자인","영상/모션그래픽","디지털아트","AI","3D","메타버스","스마트 팩토리","디지털 트윈","키즈","교육","친환경","IT&기술"])

    // 카드 값을 전달
    const [resultData2, setResultData2] = useState([
        {years:['2018', '2019', '2020', '2021', '2022', '2023']},
        {major:['미디어디자인', '산업디자인']},
        {form:['UI/UX', '3D', '그래픽 디자인', '영상/모션그래픽', '디지털아트']},
        {filed:['AI', '3D', '메타버스', '스마트 팩토리', '디지털 트윈', '키즈', '교육', '친환경', 'IT&기술']}
    ])
    

    function change(){
        setToggle(!toggle)
        console.log(toggle)
    }
    function change2(){
        
    }

    useEffect(() => {
        
        setResultData(lowData.flatMap(category => category.context).filter(context => context.selected && context.Data).map(context => context.Data).flatMap(category => category))


        const result = [];
        const filterTitle = ["years","major","form","filed"]
        for(let i in lowData){
            const filterTitle2 = filterTitle[i]
            result.push(
                {[filterTitle2] : lowData[i].context.filter(context => context.selected && context.Data).flatMap(category => category.Data)}
            )
        }
        setResultData2(result)
        console.log(resultData2)
      }, [lowData]);

      
    useEffect(function(){
        if(toggle){
            setTop(30)
        }else{
            setTop(-210)
        }
        console.log(top)
    }, [toggle])

    return(
        <div className={styles.padding}>
            <div className={styles.toggle} style={{'--top' : top + 'px'}}>
                <Filters lowData={lowData} open = {toggle} setLowData={setLowData} onClick={change2} resultData={resultData}>
                    <FilterToggle open = {toggle} onClick={change} ></FilterToggle>
                </Filters>
            </div>
            <ProjectCardList resultData2={resultData2} studentData={studentData} data={data}></ProjectCardList>
        </div>
    )
}

export default ProjectPage;