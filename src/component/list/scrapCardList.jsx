import react from "react";
import styles from "./ProjectCardList.module.css";
import ProjectCard from "../ui/ProjectCard";

// 버튼들 여러개, 년도, 전공 각각

function scrapCardList(props){

    const data = [0,0,0];

    const nameList = data.map(function(data){
        return(
                <ProjectCard key={data.key} scrap={true} context ={data}/>
        )
    })

    return(
        <div className={styles.ProjectCardList}>
            {nameList}
        </div>
    )
}

export default scrapCardList;