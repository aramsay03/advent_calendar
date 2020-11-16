import React, { useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classes from './Instructions.module.css';

const Instructions = ({ selectedDay }) => {

    // Need to add back button
        // If statement for when section is 1 (return to home page)
    // Need to create next button
        // If statement for when section is at last for that day (return to home page)

    const [section, setSection] = useState(1);
    const imageURL = `./images/instructions/${selectedDay.folder}/${selectedDay.folder}-${section}.png`;

    const backSection = () => {
        setSection(section - 1)
    }

    const nextSection = () => {
        setSection(section + 1)
    }

    const backButtonClick = (
        <button onClick={backSection}>
            Back
        </button>
    );

    const backButton = (
        <button>
            Back
        </button>
    );

    const nextButtonClick = (
        <button onClick={nextSection}>
            Next
        </button>
    );

    const nextButton = (
        <button>
            Next
        </button>
    );

    const ConditionalLinkBack = () => (section === 1)
      ? <Link to='/'>{backButton}</Link>
      : <>{backButtonClick}</>;
    
    const ConditionalLinkNext = () => (section >= selectedDay.numberOfSections)
    ? <Link to='/'>{nextButton}</Link>
    : <>{nextButtonClick}</>;

    return (
        <section className={classes.instructionsContainer}>
            {/* <div>
                <button onClick={this.backPage}>{this.nextPage}</button>
            </div> */}
            <div>
                <h1>Section {section} of {selectedDay.numberOfSections}</h1>
                <p>{selectedDay.folder}</p>
                <img className={classes.imageSection} src={imageURL} alt="InstructionImage" />
            </div>
            <div>
                <ConditionalLinkBack />
                <ConditionalLinkNext />
            </div>
        </section>
    );
}
 
export default Instructions;