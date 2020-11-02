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
    let displayD = `${props.hideRadioButtonD}`
    const A = `${props.AnswerA}`
    const B = `${props.AnswerB}`
    const C = `${props.AnswerC}`
    const D = `${props.AnswerD}`



    displayC = setDisplay(displayC);
    displayD = setDisplay(displayD);

    const [showDisplayC, setShowDisplayC] = useState(displayC)
    const [showDisplayD, setShowDisplayD] = useState(displayD)


    const handleChange=(e)=>{
       setResponse(e.target.value)
       let answer = "";
       if(e.target.value === 'A'){
        answer = A;
       }else if(e.target.value === 'B'){
        answer = B;
       }else if(e.target.value === 'C'){
        answer = C;
       }else if(e.target.value === 'D'){
        answer = D;
       }
       props.onChange(answer)
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
