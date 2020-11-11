import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Boxes from "./Boxes";
import config from '../config.json';
import classes from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: null,
            childsName: config.childsName,
            year: config.year
        };
    }

    render() {
        return (
            <div className={classes.mainContainer}>
             <Header childsName={this.state.childsName} year={this.state.year} />
             <Boxes />
            </div>
        )
    }
}

export default Main;