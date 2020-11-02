import React, {useState} from 'react';
import {Radio} from '@material-ui/core'
import "./RadioQuestion.css";

function setDisplay(hide){
        if( hide === "true"){
            hide = true;
        }else{
            hide =false;
        }
        return hide;
}

export default function RadioQuestion(props) {
    const [response, setResponse] = useState("")
    let displayC = `${props.hideRadioButtonC}`
    displayD = setDisplay(displayD);

    let A = `${props.AnswerA}`
    let B = `${props.AnswerB}`
    let C = `${props.AnswerC}`
    let D = `${props.AnswerD}`


    displayC = setDisplay(displayC);
    displayD = setDisplay(displayD);

    const [showDisplayC, setShowDisplayC] = useState(displayC)
    const [showDisplayD, setShowDisplayD] = useState(displayD)

    const handleChange=(e)=>{
        setResponse(e.target.value)
        let answers = "";
        let choice = e.target.value;
         if(choice === "A"){
             answers = A;
         }else if(choice === "B"){
             answers = B;
         }else if(choice === "C"){
             answers = C;
         }else if(choice === "D"){
             answers = D;
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
                color ="primary"
                onChange={handleChange}
                />
                <p>{A}</p>
            </div>
            <div className="responseB">
                <Radio value="B" 
                checked ={response ==="B"}
                color ="primary"
                onChange={handleChange}

                />
                <p>{B}</p>
            </div>
        { showDisplayC ?
            <div className="responseC">
                
                <Radio value="C" 
                checked ={response ==="C"}
                color ="secondary"
                onChange={handleChange}
                />
                <p>{C}</p>
            </div>
        :null}
        { showDisplayD ?
            <div className="responseD">
                <Radio value="D" 
                checked ={response ==="D"}
                color ="secondary"
                onChange={handleChange}
                />
                <p>{D}</p>
            </div>
            : null }
        </div>
    )
}
