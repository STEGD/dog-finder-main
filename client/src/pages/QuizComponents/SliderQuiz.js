import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
/*import './SliderQuiz.css'*/


function valuetext(value){
    return value + " hrs"
}

export default function SliderQuiz(props) {
    
    const increaseBy = Number(`${props.increaseValue}`)
    const setMax = Number(`${props.MaxValue}`)
    
    const handleChange=(e,val)=>{
      
        props.onChange(val)
      }
      
    return (
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
            
  
    )
}
