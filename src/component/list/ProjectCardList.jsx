import react from "react";
import styles from "./ProjectCardList.module.css";
import ProjectCard from "../ui/ProjectCard";
import plus from "../../img/plus.png";

// 버튼들 여러개, 년도, 전공 각각

function ProjectCardList(props){



    //데이터베이스의 projects 제목을 가진 배열을 모아서 보여주기
    const transformedData = [];

    props.studentData.forEach(item => {
        item.forEach(project => {
            project.projects.forEach(projectItem => {
                transformedData.push(projectItem);
            });
        });
    });



    //includes => years가 포함된 배열만 true
    // 년도
    const transformedData2 = transformedData.filter(
        pilot => props.resultData2[0].years.includes(pilot.years)
    );
    // 전공
    const transformedData3 = transformedData2.filter(
        pilot => props.resultData2[1].major.includes(pilot.major)
    );
    // 프로젝트 형태
    const transformedData4 = transformedData3.filter(
        pilot => props.resultData2[2].form.includes(pilot.form)
    );
    // 프로젝트 주제
    const transformedData5 = transformedData4.filter(
        pilot => props.resultData2[3].filed.includes(pilot.filed)
    );

    console.log(props.resultData2, transformedData4, transformedData5)


    //여기에 데이터 배열을 조작
 
    // const filterData = props.studentData.flatMap(category => category);
    // const filterData = props.studentData;
    const nameList = transformedData5.map(function(data){
        return(
                <ProjectCard scrap={props.scrap} key={data.key} context ={data}/>
        )
    })

    return(
        <div className={styles.ProjectCardList}>
            {nameList}
            {props.NEW?<div className={styles.ProjectPlus}>
                <img src={plus} alt="" />
                <h4>새 프로젝트 올리기</h4>
            </div>:''}
        </div>
    )
}

export default ProjectCardList;