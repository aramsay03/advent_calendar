import React from 'react';
import DayBox from './DayBox';
import classes from './Boxes.module.css';

const Boxes = ({ everydaysdata, handelSelectedDay }) => {
    
    const daysNode = everydaysdata.map(daysdata => {
        let randomNum = Math.floor(Math.random() * 6 + 1);
        const boxImage = `../images/gift${randomNum}.png`;

        return (
            <DayBox
                key={daysdata.id}
                daysdata={daysdata}
                boxImgURL={boxImage}
                handelSelectedDay={handelSelectedDay}
            />
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
 
export default Boxes;