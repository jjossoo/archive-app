import react from "react";
import ProjectCard from "../ui/ProjectCard";
import Textarea from "../ui/Textarea";
import Tooltip from "../ui/Tooltip";
import DropDown from "../ui/DropDown";
import styles from "./Portfolio.module.css";


function Portfolio(props){
    return(
        <div className= {styles.Portfolio}>
            <Textarea
            placeholder="기본 정보"
            subTitle="기존 정보"
            title="간단 소개글"
            height="140"
            >
                <Tooltip context="자신을 다른 사람에게 소개하는 간단한 소개글을 작성하세요!"></Tooltip>
            </Textarea>
            
            <Textarea
            placeholder="선택해주세요"
            subTitle="주요 작품 분야"
            title="관심분야"
            Drop = {true}
            >
            </Textarea>
            
            <Textarea
            placeholder="선택해주세요"
            subTitle="관심 기업"
            >
                <Tooltip context="자신이 평소에 관심을 가지고 있었던 분야에 대해서 써주세요!"></Tooltip>
            </Textarea>
            
            <Textarea
            placeholder="보유 스킬 입력"
            subTitle="보유 스킬 분야"
            title="보유 스킬"
            >
                <Tooltip context="본인이 가지고 있는 보유 스킬에 대해서 써주세요!"></Tooltip>
            </Textarea>
            
        </div>
    )
}

export default Portfolio;