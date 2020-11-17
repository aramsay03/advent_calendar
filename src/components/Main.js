import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from '../config.json';
import Header from './Header';
import Instructions from './Instructions';
import Boxes from './Boxes';
import monent from 'moment';
import classes from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: monent().format("D MMM YYYY"),
            childsName: config.childsName,
            year: config.year,
            everydaysdata: config.days,
            selectedDay: [],
            currentDayOpened: false
        }

        this.handleSelectedDay = this.handleSelectedDay.bind(this);
        this.handleCurrentDayOpened = this.handleCurrentDayOpened.bind(this);
    }

    handleSelectedDay = payload => {
        this.setState( { selectedDay: payload } );
    };

    handleCurrentDayOpened = () => {
        this.setState( { currentDayOpened: true });
    };

    render() {
         
        return (
            <Router>
                <div className={classes.mainContainer}>
                        <Header year={this.state.year} childsName={this.state.childsName} />
                    <Router>
                        <Route exact path="/">
                            <Boxes key={this.state.everydaysdata.id} everydaysdata={this.state.everydaysdata} currentDate={this.state.currentDate} handleSelectedDay={this.handleSelectedDay} />
                        </Route>
                        <Route path="/instructions">
                            <Instructions selectedDay={this.state.selectedDay} markAsOpened={this.handleCurrentDayOpened} />
                        </Route>
                    </Router>
                </div>
            </Router>
        );
    }
}
 
export default Main;