import React from 'react';
import Main from './Main';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "../images/snowbackground.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <Main className={classes.Main} />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;