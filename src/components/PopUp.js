import React from 'react';  
import classes from './PopUp.module.css';  

class Popup extends React.Component {  
  render() {  
    return (  
      <div className={classes.popup}>  
        <div className={classes.popupInner}>
          <img alt="PopUp" src={this.props.popupImage} />
          <h1>{this.props.text}</h1>  
          <button onClick={this.props.closePopup}>CLOSE</button>  
        </div>  
      </div>  
    );  
  }  
}  

export default Popup;