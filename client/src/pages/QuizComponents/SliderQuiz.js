import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
/*import './SliderQuiz.css'*/

const useStyles =makeStyles({
    root:{
        width:455,
    },
});

function valuetext(value){
    return value + " hrs"
}

export default function SliderQuiz(props) {
    const classes= useStyles();
    const [valueInput, setValueInput] = useState("")
    const increaseBy = Number(`${props.increaseValue}`)
    const setMax = Number(`${props.MaxValue}`)
    
    const handleChange=(e,val)=>{
        setValueInput(val)
        console.log(valueInput)  
        props.onChange(valueInput)
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
                step={increaseBy}
                marks
                min={0}
                max={setMax}
            />
            </div>
            </div>
            
        </div>
    )
}
