
import React from 'react'
import { useSelector } from 'react-redux';
import ReactTimeAgo from "react-time-ago";

export default function AllSubCard({subject}) {

    //get acDetails from Redux Store
    const usDetails = useSelector(state => state.accountDetails);



    return (
        <div className="subject_in_cards">
            <div className="subject_head">
                <div className="subject_img">
                    <img src={`${process.env.REACT_APP_LMS_MAIN_URL}${subject.subject_cover}`} alt="subjects"/>
                </div>
                <div className="teach_img">
                    <img src={`${process.env.REACT_APP_LMS_MAIN_URL}${subject.author.profile_pic}`} alt="child"/>
                </div>
            </div>
            <div className="subject_body">
                <h2>{subject.subject_name}</h2>
                <p>{subject.author.user.first_name}</p>
                <div className="row_sim">
                    {/*<h3><i className="far fa-user"></i>500 Students</h3>*/}
                    <h3><i className="fas fa-graduation-cap"></i>{subject.class_type.toUpperCase()}</h3>
                </div>
            </div>
            <div className="subject_tail">
                <p><i className="far fa-clock"></i><ReactTimeAgo date={Date.parse(subject.created_at)} locale="en-US"/></p>
            </div>
        </div>
    )
}
