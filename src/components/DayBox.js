import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './DayBox.module.css';
import moment from 'moment';

const DayBox = ({ daysdata, boxImgURL, currentDate, handleSelectedDay }) => {

    // let randomNum = Math.floor(Math.random() * 6 + 1);
    // const Background = `../images/gift1.png`;
    let sectionStyle = {            
        backgroundImage: `url(${boxImgURL})`
    }

    const boxDate = daysdata.Date
    let startPageURL = '/instructions'

    const [pageURL, setPageURL] = useState(startPageURL);

    useEffect(() => {
        const checkDay = () => {
            if ( moment(boxDate).isSameOrBefore(currentDate) === true ) {
                return null;
            } else {
                setPageURL('/')
            }
        }
        checkDay();
    });

    const giftBox = (
        <div className={classes.giftbox} style={ sectionStyle }>
            <h1>{daysdata.day}</h1>
        </div>
    )

    // const openBox = (
    //     <Link to={pageURL} daysData={daysdata} onClick={() => handleSelectedDay(daysdata)}>
    //         {giftBox}
    //         {/* <div className={classes.giftbox} style={ sectionStyle }>
    //         <h1>{daysdata.day}</h1>
    //         </div> */}
    //     </Link>
    // )

    // const flashMessage = (
    //     <Link to='/' daysData={daysdata} onClick={() => handleSelectedDay(daysdata)}>
    //         {giftBox}
    //     </Link>
    // )
    // HandleFlashMessage

    // const ConditionalLinkDayBox = () => {
    //     return "Hello World"
    //     if ( boxDate === currentDate ) {
    //         return (
    //             "Hello World 1"
    //         )
    //     } else {
    //         return (
    //             "Hello World 2"
    //         )
    //     }
    // }

    // const ConditionalLinkDayBox = () => ( boxDate === currentDate )
    // ? <Link to={pageURL} daysData={daysdata} onClick={() => handleSelectedDay(daysdata)}>{giftBox}</Link>
    // : <Link to='/' daysData={daysdata} onClick={() => handleSelectedDay(daysdata)}>{giftBox}</Link>;

    // moment(boxDate).isSameOrBefore(currentDate) === true
    
    return (
        <li className={classes.list}>
            {/* {ConditionalLinkDayBox} */}
            {/* {openBox} */}
            <Link to={pageURL} daysdata={daysdata} onClick={() => handleSelectedDay(daysdata)}>
                {giftBox}
                {/* <div className={classes.giftbox} style={ sectionStyle }>
                    <h1>{daysdata.day}</h1>
                </div> */}
            </Link>
        </li>
    );
}
 
export default DayBox;