import React, { Component } from 'react';
import data from '../config.json';
import DayBox from './DayBox'

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,            
        }
    }
    render() {
        const daysNode = this.state.data.days.map(day => {
            return (
                <DayBox key={day.id} day={day.folder} sections={day.numberOfSections} />
            )
        })
        return (
            <section>
                <ul>
                    {daysNode}
                </ul>
            </section>
        );
    }
}
 
export default Boxes;