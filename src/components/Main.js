import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from '../config.json';
import Header from './Header';
import Instructions from './Instructions';
import Boxes from './Boxes';
import moment from 'moment';
import classes from './Main.module.css';
import Popup from './PopUp';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment().format("D MMM YYYY"),
            childsName: config.childsName,
            year: config.year,
            everydaysdata: config.days,
            selectedDay: [],
            currentDayOpened: false,
            popupMessage: 'You will need to wait for that day',
            popupImage: '../images/no-lego.png',
            showPopup: false
        }

        this.handleSelectedDay = this.handleSelectedDay.bind(this);
        this.handleCurrentDayOpened = this.handleCurrentDayOpened.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup = () => {  
        this.setState({ showPopup: !this.state.showPopup });  
    };

    handleSelectedDay = payload => {
        const boxDate = payload.Date;
        if ( moment(boxDate).isSameOrBefore(this.state.currentDate) === false ) {
            this.setState( { popupMessage: 'You will need to wait for that day', popupImage: '../images/no-lego.png'} );
            this.togglePopup();
        } else {
            this.setState( { selectedDay: payload } );
        }
    };

    handleCurrentDayOpened = () => {
        this.setState( { popupMessage: 'Well done, Come back tomorrow to build some more', popupImage: '../images/santa-claus.png'} )
        this.togglePopup();
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
                            {this.state.showPopup ?  
                                <Popup  
                                    text={this.state.popupMessage}
                                    popupImage={this.state.popupImage}
                                    closePopup={this.togglePopup} 
                                />  
                                : null  
                            }
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