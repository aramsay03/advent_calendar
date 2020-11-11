import React, { Component } from 'react';
import data from '../config.json';
import DayBox from './DayBox';
import classes from './Boxes.module.css';

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,            
        }
    }
    render() {
        const daysNode = this.state.data.days.map(day => {
            let randomNum = Math.floor(Math.random() * 6 + 1);
            const boxImage = `../images/gift${randomNum}.png`;
            return (
                <DayBox day={day.day} folder={day.folder} sections={day.numberOfSections} opened={day.opened} boxImgURL={boxImage} />
            )
        })
        return (
            <section className={classes.boxesSection}>
                <ul>
                    {daysNode}
                </ul>
            </section>
        );
    }
}
 
export default Boxes;