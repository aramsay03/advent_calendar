import React from 'react';
// import { BrowserRouter as Link } from "react-router-dom";
import classes from './Instructions.module.css';

const Instructions = ({ selectedDay }) => {

    // Need to add back button

    // Need to create next button

    let currentSection = 1;
    const imageURL = `./images/instructions/${selectedDay.folder}/${selectedDay.folder}-${currentSection}.png`;

    return (
        <section className={classes.instructionsContainer}>
            {/* <div>
                <button onClick={this.backPage}>{this.nextPage}</button>
            </div> */}
            <div>
                <h1>This should be instructions here</h1>
                <p>{selectedDay.folder}</p>
                {/* {sectionImage} */}
                <img className={classes.imageSection} src={imageURL} alt="InstructionImage" />
            </div>
            <div>
                {/* <button onClick={this.nextPage}>Next</button> */}
            </div>
        </section>
    );
}
 
export default Instructions;