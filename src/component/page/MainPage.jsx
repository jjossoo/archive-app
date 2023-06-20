import React from 'react';
import Text from '../ui/mainCard/MainText';
import Card from '../ui/mainCard/MainCard';
import styles from '../ui/mainCard/MainCard.module.css';
import Banner from '../ui/mainCard/MainBanner';
import BCard from '../ui/mainCard/MainBCard';
import BText from '../ui/mainCard/MainBText';
import BCardImg from '../ui/mainCard/MainBCardImg';
import BTCardImg from '../ui/mainCard/MainBTCardImg';

import OnboardingModal from "../ui/OnboardingModal";

function MainCard(props){
    return (
        <>
        <div className={styles.Modal}>
            <OnboardingModal/>
        </div>
        <div className={styles.back}>
            <div className={styles.hero}>
                <h1>We are <br /> Design Dept.</h1>
                <p>한국공학대학교 디자인학부의 졸업작품을 아카이빙하는
                    사이트입니다.
                </p>
            </div>
        </div>
            <div className={styles.MainPage_CardWrapper}>
                    <div className={styles.MainPage_Card}>
                        <Banner></Banner>
                        <div className={styles.MainPage_ProjectCard}>
                            <BCardImg></BCardImg>
                            <BTCardImg></BTCardImg>
                            <BCard></BCard>
                        </div>
                    </div>

                    <div className={styles.MainPage_BText}>
                        
                        <BText></BText>
                        <Card />
                    </div>

            </div>
        </>
    )
}

export default MainCard;