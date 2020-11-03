import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Boxes from "./Boxes"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: null
        };
    }

    render() {
        return (
            <div>
             <Header />
             <Boxes />
            </div>
        )
    }
}

export default Main;