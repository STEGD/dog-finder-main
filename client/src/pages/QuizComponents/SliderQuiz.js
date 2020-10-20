import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
import './SliderQuiz.css'

const useStyles =makeStyles({
    root:{
        width:300,
    },
});

function valuetext(value){
    return `${value}`
}


export default function SliderQuiz() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <div className="slider-container">
            <div className="slider-title-Question">
            <Typography id="discrete-slider" gutterBottom>
                How many hours are you free?
            </Typography>
            </div>
            <div className="slider-bar">
            <Slider 
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
            />
            </div>
            </div>
            
        </div>
    )
}
