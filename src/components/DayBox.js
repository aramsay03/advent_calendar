import React from 'react';
import { Link } from 'react-router-dom';
import classes from './DayBox.module.css';

const DayBox = ({ daysdata, boxImgURL, handelSelectedDay }) => {

    // let randomNum = Math.floor(Math.random() * 6 + 1);
    // const Background = `../images/gift1.png`;
    let sectionStyle = {            
        backgroundImage: `url(${boxImgURL})`
    }
    let pageURL = '/instructions'
    
    return (
        <li className={classes.list}>
        <Link to={pageURL} daysData={daysdata} onClick={() => handelSelectedDay(daysdata)}>
            <div className={classes.giftbox} style={ sectionStyle }>
                <h1>{daysdata.day}</h1>
            </div>
        </Link>
        </li>
    );
}
 
export default DayBox;