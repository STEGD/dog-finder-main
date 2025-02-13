import React, {useState} from 'react';
import {Radio} from '@material-ui/core'
import "./RadioQuestion.css";

function setDisplay(hide){
        if( hide === "true"){
            hide = true;
        }else{
            hide = false;
        }
        return hide;
}

export default function RadioQuestion(props) {
    const [response, setResponse] = useState("")
    let displayC = `${props.hideRadioButtonC}`
    let displayD = `${props.hideRadioButtonD}`

    displayC = setDisplay(displayC);
    displayD = setDisplay(displayD);

    let A = `${props.AnswerA}`;
    let B = `${props.AnswerB}`;
    let C = `${props.AnswerC}`;
    let D = `${props.AnswerD}`;
    let radioButtonColor = `${props.color}`;



    const handleChange=(e)=>{

       setResponse(e.target.value)
       let answers = "";
       let choice = e.target.value;
        if(choice === "A"){
            answers = 1;
        }else if(choice === "B"){
            answers = 2;
        }else if(choice === "C"){
            answers = 3;
        }else if(choice === "D"){
            answers = 4;
        }
       props.onChange(answers)
    }

    return (
        <div className="grid-container">
            <div className="title">
            <h3>{props.question}</h3>
            </div>
            <div className="responseA">
                <Radio value="A" 
                checked ={response ==="A"}
                color ={radioButtonColor}
                onChange={handleChange}
                />
                <p>{A}</p>
            </div>
            <div className="responseB">
                <Radio value="B" 
                checked ={response ==="B"}
                color ={radioButtonColor}
                onChange={handleChange}
                />
                <p>{B}</p>
            </div>
        { (displayC === true) ?
            <div className="responseC">
                <Radio value="C" 
                checked ={response ==="C"}
                color ={radioButtonColor}
                onChange={handleChange}
                />
                <p>{C}</p>
            </div>
        :null}
        { (displayD === true) ?
            <div className="responseD">
                <Radio value="D" 
                checked ={response ==="D"}
                color ={radioButtonColor}
                onChange={handleChange}
                />
                <p>{D}</p>
            </div>
            : null }
        </div>
    )
}
