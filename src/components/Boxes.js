import React from 'react';
import DayBox from './DayBox';
import classes from './Boxes.module.css';

const Boxes = ({ everydaysdata, currentDate, handleSelectedDay }) => {

    const daysNode = everydaysdata.map(daysdata => {
        let randomNum = Math.floor(Math.random() * 10 + 1);
        const boxImage = `../images/gift${randomNum}.png`;

        return (
            <DayBox
                key={daysdata.id}
                daysdata={daysdata}
                boxImgURL={boxImage}
                currentDate={currentDate}
                handleSelectedDay={handleSelectedDay}
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