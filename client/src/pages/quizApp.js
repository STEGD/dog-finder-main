import React from 'react';
import RadioQuestion from './QuizComponents/RadioQuestion';
import TextQuestion from './QuizComponents/TextQuestion';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import SliderQuiz from './QuizComponents/SliderQuiz';
import "./quizApp.css";

export default function quizApp() {
    return (
        <div className="quiz-container">
            <div className="title">
                <h1>Pet Survey</h1>
            </div>
            
            <div className="question-container-1">
                <TextQuestion question="How much money can you spend for your pet?" />
            </div>
            <div className="question-container-2">
            <RadioQuestion 
                question="How active are you or how active can you be for your pet"
                AnswerA="Not active"
                AnswerB="Barely active"
                AnswerC="Moderatly active"
                AnswerD="Extremly active"
            />
            </div>
            <div className="question-container-3">
                <RadioQuestion 
                        question="What is your current living situation"
                        AnswerA="Apartment"
                        AnswerB="House with backyard"
                        AnswerC="House without backyard"
                        AnswerD="D"
                    />
            </div>
            <div className="question-container-4">
            <SliderQuiz quesiton="How much free time do you have to spend with your pet? 
            Rate is measured in hours "/>
            </div>
            <div className="submit-container">
                <ButtonSubmit text="Submit"/>
            </div>
        </div>
    )
}

