import react, { useState, useEffect } from "react";
// import data from "../../dummyForStudent.json";
// import data from "../../dummyForStudent.json"

import scrapCardList from "../list/scrapCardList";
import styles from "./ScrapPage.module.css";
import ProjectCardList from "../list/ProjectCardList";

import studentData from "../../studentData.json";
import data from "../../Student.json";
import banner from "../../img/banner.png";

function ScrapPage(props) {

    // 더미
    const resultData2 = [
        {years:['2018', '2019', '2020', '2021', '2022', '2023']},
        {major:['미디어디자인', '산업디자인']},
        {form:['UI/UX', '3D', '그래픽 디자인', '영상/모션그래픽', '디지털아트']},
        {filed:['AI', '3D', '메타버스', '스마트 팩토리', '디지털 트윈', '키즈', '교육', '친환경', 'IT&기술']}
    ];

    const num = studentData.length

    return (
        <div className={styles.ScrapCard}>
              <div className={styles.header}>
                <div className={styles.context}>
                    <div>
                        <h1>기업님의 스크랩은, 현재 <span class={styles.color}>8</span>개의 스크랩이 있습니다.</h1>
                        <p>좋은 점과 아쉬웠던 점을 비교해보면서 본인에게 딱 맞는 인재를 찾아보세요.</p>
                    </div>
                    <img src={banner}></img>
                </div>
            </div>
            <ProjectCardList resultData2={resultData2} studentData={studentData} scrap={true} data={data} NEW={false}>
            </ProjectCardList>
        </div>
    )
}

export default ScrapPage;