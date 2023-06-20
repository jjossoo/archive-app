import React from 'react'
import ProjectItem from './ProjectItem';
import ProjectImg from '../../img/project.png';

import './Project.css';

function ProjectCard(props) {


    return (
        <div className='project'>
            <div className='project_container'>
                <div className='project_wrapper'>

                    <ProjectItem
                        scrap={props.scrap}
                        src={props.context.thum}
                        field={props.context.filed}
                        name={props.context.name}
                        studentname={props.context.studentName}
                        major={props.context.major}
                        path="/ProjectDetailPage"
                        label=''
                        goodtext='작품에 대한 이해도가 뛰어나고 자신이 무엇을 담아내고자 했는지가 한 눈에 보였다.
                        추후에 우리 회사와 잘 맞을 것 같음.'
                        badtext='컴포넌트의 정리가 조금 부족해보인다.'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;