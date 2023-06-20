import react, {useState, useEffect} from "react";
import data from "../../Student.json";
import Filters from "../ui/Filters";
import FilterToggle from "../ui/FillterToggle";
import ProjectCardList from "../list/ProjectCardList";
import Portfolio from "../list/Portfolio";
import Tooltip from "../ui/Tooltip";
import TextArea from "../ui/Textarea";
import CommentList from "../list/CommentList";
import styles from "./PersonalPage.module.css";

// 이 페이지에서만 보이는 정보
import studentData from "../../studentDataOnly.json";


function PersonalPage(props){

    // 더미
    const resultData2 = [
        {years:['2018', '2019', '2020', '2021', '2022', '2023']},
        {major:['미디어디자인', '산업디자인']},
        {form:['UI/UX', '3D', '그래픽 디자인', '영상/모션그래픽', '디지털아트']},
        {filed:['AI', '3D', '메타버스', '스마트 팩토리', '디지털 트윈', '키즈', '교육', '친환경', 'IT&기술']}
    ];

    return(
        <div className={styles.padding}>
            <div className={styles.profile}>
                <img src="" alt="" />
                <h2>박건도</h2>
                <p className={styles.major}>미디어디자인학과</p>
                <p className={styles.email}>bbakbbakdo@naver.com</p>
                <div className={styles.context}>
                    <div>졸업작품 : 3</div>
                    <div>과제전 : 3</div>
                </div>
            </div>
            <ProjectCardList resultData2={resultData2} studentData={studentData} data={data} NEW={true}>
            </ProjectCardList>
            <hr/>
            <Portfolio></Portfolio>
            <hr/>
            <CommentList></CommentList>

        </div>

    )
}

export default PersonalPage;