import React, { Component } from 'react';
import classes from './DayBox.module.css';

class DayBox extends Component {
    render() {
        // let randomNum = Math.floor(Math.random() * 6 + 1);
        // const Background = `../images/gift1.png`;
        var sectionStyle = {            
            backgroundImage: `url(${this.props.boxImgURL})`
        };
        return (
            <li className={classes.list}>
            <div className={classes.giftbox} style={ sectionStyle }>
                <h1>{this.props.day}</h1>
                {/* <p>{this.props.folder}</p> */}
                {/* <p>{this.props.sections}</p> */}
                {/* <p>{this.props.boxImgURL}</p> */}
            </div>
            </li>
        );
    }
}
 
export default DayBox;