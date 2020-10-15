import React from 'react'
import RadioQuestion from './QuizComponents/RadioQuestion'
import TextQuestion from './QuizComponents/TextQuestion'

export default function quizApp() {
    return (
        <div>
            <p>This is the quiz</p>
            <h1>Pet Survey</h1>
            <RadioQuestion 
                question="What is your favorite letter"
                AnswerA="A"
                AnswerB="B"
                AnswerC="C"
                AnswerD="D"
            />
             <RadioQuestion 
                question="What is not your favorite letter"
                AnswerA="A"
                AnswerB="B"
                AnswerC="C"
                AnswerD="D"
            />
            <TextQuestion />




        </div>
    )
}

