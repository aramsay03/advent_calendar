import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Instructions.module.css';

const Instructions = ({ selectedDay, markAsOpened }) => {

    // Need to add back button - Done
        // If statement for when section is 1 (return to home page) - Done
    // Need to create next button - Done
        // If statement for when section is at last for that day (return to home page) - Done
    // Create function to mark day as opened - Done

    const [section, setSection] = useState(1);
    const imageURL = `./images/instructions/${selectedDay.folder}/${selectedDay.folder}-${section}.png`;

    const backSection = () => {
        setSection(section - 1);
    }

    const nextSection = () => {
        setSection(section + 1);
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
        <button onClick={markAsOpened}>
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
            <div className={classes.imageHeader}>
                <h1>Section {section} of {selectedDay.numberOfSections}</h1>
            </div>
            <div className={classes.imageSection}>
                <img src={imageURL} alt="InstructionImage" />
            </div>
            <div className={classes.navButtons}>
                <ConditionalLinkBack />
                <ConditionalLinkNext />
            </div>
        </section>
    );
}
 
export default Instructions;