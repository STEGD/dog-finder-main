import React, {useState} from 'react';
import {Radio} from '@material-ui/core'
import "./RadioQuestion.css";

export default function RadioQuestion(props) {
    const [response, setResponse] = useState("option1")

    const handleChange=(e)=>{
       setResponse(e.target.value)
    }
    return (
        <div className="question-body">
            <h3>{props.question}</h3>
            <div>
                
                <Radio value="A" 
                checked ={response ==="A"}
                color ="primary"
                onChange={handleChange}
                />
                <span>{props.AnswerA}</span>
                
                <Radio value="B" 
                checked ={response ==="B"}
                color ="primary"
                onChange={handleChange}
                />
                <span>{props.AnswerB}</span>
            </div>
            <div>
                
                <Radio value="C" 
                checked ={response ==="C"}
                color ="secondary"
                onChange={handleChange}
                />
                <span>{props.AnswerC}</span>
                <Radio value="D" 
                checked ={response ==="D"}
                color ="secondary"
                onChange={handleChange}
                />
                <span>{props.AnswerD}</span>
            </div>
        </div>
    )
}
