import React from 'react';
import RadioQuestion from './QuizComponents/RadioQuestion';
import TextQuestion from './QuizComponents/TextQuestion';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import SliderQuiz from './QuizComponents/SliderQuiz';
import "./quizApp.css";

export default function quizApp() {
    return (
        <div className="quiz-container">
            <h1>Pet Survey</h1>
            <div className="question-container-1">
                <TextQuestion question="How much can you spend on a pet" />
            </div>
            <div className="question-container-2">
            <RadioQuestion 
                question="What is your favorite letter"
                AnswerA="The column-gap CSS property sets the size of the gap 
                (gutter) ... it"
                AnswerB="B"
                AnswerC="C"
                AnswerD="D"
            />
            </div>
            <div className="question-container-3">
                <RadioQuestion 
                        question="What is not your favorite letter"
                        AnswerA="The column-gap CSS property sets the size of the gap 
                        (gutter) ... it"
                        AnswerB="B"
                        AnswerC="The column-gap CSS property sets the size of the gap 
                        (gutter) ... it"
                        AnswerD="D"
                    />
            </div>
            <div className="question-container-4">
            <SliderQuiz />
            </div>
            <div className="submit-container">
                <ButtonSubmit text="Submit"/>
            </div>
        </div>
    )
}

