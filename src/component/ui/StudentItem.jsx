import React from 'react'
import { Link } from 'react-router-dom';
import './StudentCard.css';

function StudentItem(props) {

    const Data = props.context

    const List = Data.map(function (data) {
        console.log(Object.values(data)[0])
        return (
            <div>
                {Object.keys(data)[0]} : {Object.values(data)[0]}
            </div>
        )
    })

    return (
        <>
            <li className='card_item'>
                <Link className='card_item_link' to={props.path}>

                    <img className='card_item_img'

                        alt='Student Image'
                        src={props.src} />

                    <div className='card_bottom'>
                        <div className='card_item_info'>
                            <div>
                                <div className='card_item_name'>{props.name}</div>
                            </div>
                            <div>
                                <div className='card_item_Data'>
                                    {List}
                                </div>
                                <div class='card_item_info2'>
                                    <div className='card_item_major'>{props.grade} | {props.major}</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </Link>
            </li>
        </>
    )
}

export default StudentItem;