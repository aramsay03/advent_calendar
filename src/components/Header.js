import React from 'react';
import classes from './Header.module.css';
import moment from 'moment';

const Header = (props) => {

    const currentDate = moment().format("Do MMM")

    return (
        <header className={classes.appHeader} >
            <div className={classes.date}>
                <h2>{currentDate}</h2>
            </div>
            <div className={classes.title}>
                <h1>{ props.childsName }'s Lego Christmas Advent Calendar</h1>
            </div>
            <div className={classes.nav}>
                <h2>{ props.year }</h2>
                {/* <img src={santaLogo} /> */}
            </div>
        </header>
    )
}

export default Header;