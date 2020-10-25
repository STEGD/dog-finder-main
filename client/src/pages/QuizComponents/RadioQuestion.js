import React, {useState} from 'react';
import {Radio} from '@material-ui/core'
import "./RadioQuestion.css";

export default function RadioQuestion(props) {
    const [response, setResponse] = useState("")

    const handleChange=(e)=>{
       setResponse(e.target.value)
       console.log(response)
       props.onChange(e.target.value)
       console.log("done")
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
            <div className="responseC">
                
                <Radio value="C" 
                checked ={response ==="C"}
                color ="secondary"
                onChange={handleChange}
                />
                <p>{props.AnswerC}</p>
            </div>
            <div className="responseD">
                <Radio value="D" 
                checked ={response ==="D"}
                color ="secondary"
                onChange={handleChange}
                

                />
                <p>{props.AnswerD}</p>
            </div>
        </div>
    )
}
