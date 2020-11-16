import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from '../config.json';
import Instructions from './Instructions';
import Boxes from './Boxes';
import monent from 'moment';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: monent().format("D MMM YYYY"),
            // childsName: config.childsName,
            // year: config.year,
            everydaysdata: config.days,
            selectedDay: []
        }

        this.handleSelectedDay = this.handleSelectedDay.bind(this);
    }

    handleSelectedDay = payload => {
        this.setState( { selectedDay: payload } );
    };

    render() {
         
        return (
            <Router>
                <div>
                    <Router>
                        <Route exact path="/">
                            <Boxes key={this.state.everydaysdata.id} everydaysdata={this.state.everydaysdata} currentDate={this.state.currentDate} handleSelectedDay={this.handleSelectedDay} />
                        </Route>
                        <Route path="/instructions">
                            <Instructions selectedDay={this.state.selectedDay} />
                        </Route>
                    </Router>
                </div>
            </Router>
        );
    }
}
 
export default Main;