import React,{ useState,useEffect,useRef } from "react";

import styles from "./GNB.module.css";
import logo from '../../img/Logo.png';
import logo2 from '../../img/Logo2.png';
import { useNavigate, useParams, useLocation } from "react-router-dom";

function TopUi(props){
    const nav = useNavigate();
    const location = useLocation();
    const [main, setMain] = useState(true);

    useEffect(() => {
        if(location.pathname === '/'){
            setMain(true)
        }else{
            setMain(false)
        }
    }, [location]);

    return(
        <div className={`${styles["GNB"]} ${main && styles["turn"]}`}>
            <div>
                {/* 로고 이미지 */}
                <div className={styles.Logo}>
                <label class="boxradio">
                    <input type="radio" name="shape" />
                    <img src={main?logo2:logo} alt="" onClick={() => {nav("/");
            }}/>
                </label>
                </div>

                <div className={styles.menu}>
                    <ul>
                    <label class="boxradio">
                        <input type="radio" name="shape" />
                            <li onClick={() => {nav("/ProjectPage");}}>프로젝트</li>
                        </label>
                    <label class="boxradio">
                        <input type="radio" name="shape"/>
                            <li onClick={() => {nav("/StudentPage");}}>학생 소개</li>
                    </label>
                    <label class="boxradio">
                        <input type="radio" name="shape"/>
                            <li onClick={() => {nav("/personalPage")}}>이력서 관리</li>
                    </label>
                    <label class="boxradio">
                        <input type="radio" name="shape"/>
                            <li onClick={() => {nav("/ScrapPage");}}>스크랩 관리</li>
                    </label>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopUi;


