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
    let displayC = `${prop.hideRadioButtonC}`
    let displayD = `${prop.hideRadioButtonD}`
    

    const [showDisplayC, setShowDisplayC] = useState()
    const [showDisplayD, setShowDisplayD] = useState()


    const handleChange=(e)=>{
       setResponse(e.target.value)
       props.onChange(e.target.value)
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
                <p>{props.AnswerA}</p>
            </div>
            <div className="responseB">
                <Radio value="B" 
                checked ={response ==="B"}
                color ="primary"
                onChange={handleChange}

                />
                <p>{props.AnswerB}</p>
            </div>
        { showDisplayC ?
            <div className="responseC">
                
                <Radio value="C" 
                checked ={response ==="C"}
                color ="secondary"
                onChange={handleChange}
                />
                <p>{props.AnswerC}</p>
            </div>
        :null}
        { showDisplayD ?
            <div className="responseD">
                <Radio value="D" 
                checked ={response ==="D"}
                color ="secondary"
                onChange={handleChange}
                />
                <p>{props.AnswerD}</p>
            </div>
            : null }
        </div>
    )
}
