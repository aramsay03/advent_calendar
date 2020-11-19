import React from 'react';  
import classes from './PopUp.module.css';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
// import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

class Popup extends React.Component { 
  
  // const classesui = useStyles();

  render() {  
    return (  
      <div className={classes.popup}>  
        <div className={classes.popupInner}>
          <img alt="PopUp" src={this.props.popupImage} />
          <h1>{this.props.text}</h1>  
          <Button
            onClick={this.props.closePopup}
            variant="contained"
            color="red"
            // className={classesui.button}
            startIcon={<CancelIcon />}
            >CLOSE</Button>  
        </div>  
      </div>  
    );  
  }  
}  

export default Popup;