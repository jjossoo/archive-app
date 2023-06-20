import React from 'react'
import { Link } from 'react-router-dom';
import './Project.css';
import ProjectImg2 from '../../img/Project/1.jpg';

function ProjectItem(props) {
    return (
        <>
            <li className='project_item'>
                <Link className='project_item_link' to={props.path}>

                    <img className='project_item_img'
                        alt='Project Image'
                        src={`${process.env.PUBLIC_URL}${props.src}`} />
                    <div className='project_field'>{props.field}</div>

                    <div className='project_item_info'>
                            <div className='project_item_name'>{props.name}</div>
                            <div>
                                <div className='project_item_studentname'>{props.studentname}</div>
                                <div className='project_item_major'>{props.major}</div>
                            </div>
                    </div>

                    {props.scrap?
                    <div class="item__overlay">
                        <div class="item__body">
                            <div className='good'>좋은 점<h2>{props.goodtext}</h2></div>
                            <div className='bad'>아쉬운 점<h2>{props.badtext}</h2></div>
                        </div>
                    </div>
                    :''
                    }
                </Link>
            </li>
        </>
    )
}

export default ProjectItem;