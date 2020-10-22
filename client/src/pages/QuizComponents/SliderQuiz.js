import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
/*import './SliderQuiz.css'*/

const useStyles =makeStyles({
    root:{
        width:300,
    },
});

function valuetext(value){
    let output = `${value}`
    return value + " hrs"
}

export default function SliderQuiz(props) {
    const classes= useStyles();
    const [valueInput, setValueInput] = useState("option1")

    const handleChange=(e,val)=>{
        setValueInput(val)
        console.log(valueInput)  
      }
    return (
        <div className={classes.root}>
            <div className="slider-container">
            <div className="slider-title-Question">
            <Typography id="discrete-slider" gutterBottom>
                {props.quesiton}
            </Typography>
            </div>
            <div className="slider-bar">
            <Slider 
                defaultValue={0}
                getAriaValueText={valuetext}
                onChange={handleChange}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={0.5}
                marks
                min={0}
                max={6}
            />
            </div>
            </div>
            
        </div>
    )
}
