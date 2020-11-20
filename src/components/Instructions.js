import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Instructions.module.css';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
        <Button onClick={backSection}
        variant="contained"
        color="red"
        startIcon={<NavigateBeforeIcon />}>
            Back
        </Button>
    );

    const backButton = (
        <Button
        variant="contained"
        color="red"
        startIcon={<NavigateBeforeIcon />}>
            Back
        </Button>
    );

    const nextButtonClick = (
        <Button onClick={nextSection}
        variant="contained"
        color="red"
        endIcon={<NavigateNextIcon />}>
        Next
        </Button>
    );

    const nextButton = (
        <Button onClick={markAsOpened}
        variant="contained"
        color="red"
        endIcon={<NavigateNextIcon />}>
            Next
        </Button>
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