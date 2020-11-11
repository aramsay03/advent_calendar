import React from 'react';
import classes from './Header.module.css';

export default function Header(props) {

    return (
        <div className={classes.appHeader} >
            <div className={classes.date}>
                <h2>1st Dec</h2>
            </div>
            <div className={classes.title}>
                <h1>{ props.childsName }'s Lego Christmas Advent Calendar { props.year }</h1>
            </div>
            <div className={classes.nav}>
                <button>Back</button>
            </div>
        </div>
    )
}