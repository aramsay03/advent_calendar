import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from '../config.json';
import Instructions from './Instructions';
import Boxes from './Boxes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentDate: null,
            // childsName: config.childsName,
            // year: config.year,
            everydaysdata: config.days,
            selectedDay: []
        }

        this.handelSelectedDay = this.handelSelectedDay.bind(this);
    }

    handelSelectedDay = payload => {
        this.setState( { selectedDay: payload } );
    }

    render() {
         
        return (
            <Router>
                <div>
                    <Router>
                        <Route exact path="/">
                            <Boxes key={this.state.everydaysdata.id} everydaysdata={this.state.everydaysdata} handelSelectedDay={this.handelSelectedDay} />
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