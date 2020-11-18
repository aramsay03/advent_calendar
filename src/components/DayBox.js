import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './DayBox.module.css';
import moment from 'moment';

const DayBox = ({ daysdata, boxImgURL, currentDate, handleSelectedDay, togglePopup }) => {

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
                setPageURL('/');
            }
        }
        checkDay();
    });

    const giftBox = (
        <div className={classes.giftbox} style={ sectionStyle }>
            <h1>{daysdata.day}</h1>
        </div>
    )
    
    return (
        <li className={classes.list}>
            <Link className={classes.link} to={pageURL} daysdata={daysdata} onClick={() => handleSelectedDay(daysdata) }>
                {giftBox}
            </Link>
        </li>
    );
}
 
export default DayBox;