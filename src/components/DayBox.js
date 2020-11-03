import React, { Component } from 'react';

class DayBox extends Component {
    render() {
        let randomNum = Math.floor(Math.random() * 6 + 1);
        const Background = `../images/gift1.png`;
        var sectionStyle = {
            width: "100px",
            backgroundImage: "url(" + { Background } + ")"
        };
        return (
            <li style={ sectionStyle }>
            <div style={ sectionStyle }>
                <h1>{this.props.key}</h1>
            </div>
            </li>
        );
    }
}
 
export default DayBox;