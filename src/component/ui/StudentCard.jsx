import React from 'react'
import StudentItem from './StudentItem';
import './StudentCard.css';

function StudentCard(props) {
    const context = [{ 졸업작품: 3 }, { 과제전: 3 }];
    return (
        <div className='card'>
            <div className='card_container'>
                <div className='card_wrapper'>
                    <StudentItem
                        src={props.context[1]}
                        name={props.context[0]}
                        major="미디어디자인공학과"
                        grade="18학번"
                        label=''
                        path=''
                        context={context}
                    />
                </div>
            </div>
        </div>
    )
}

export default StudentCard;