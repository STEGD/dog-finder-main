import React,{useState} from 'react';
import RadioQuestion from './QuizComponents/RadioQuestion';
import TextQuestion from './QuizComponents/TextQuestion';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import SliderQuiz from './QuizComponents/SliderQuiz';
import "./quizApp.css";

export default function quizApp(props) {
    
    const[question1, setQuestion1]= useState('')
    const[question2, setQuestion2]= useState('')
    const[question3, setQuestion3]= useState('')
    const[question4, setQuestion4]= useState('')
    const[question5, setQuestion5]= useState('')
    const[question6, setQuestion6]= useState('')
    const[question7, setQuestion7]= useState('')
    const[question8, setQuestion8]= useState('')
    const[question9, setQuestion9]= useState('')
    const[question10, setQuestion10]= useState('')


    return (
        <div className="quiz-container">
            <div className="title">
                <h1>Pet Survey</h1>
            </div>
            
            <div className="text-question-container">
                <TextQuestion question="How much money per year can you spend for your pet?" 
                onChange={value=> setQuestion1(value)}
                />
            </div>

            <div className="text-question-container">
                <TextQuestion question="How much money can you spend on your pet for the first year?" 
                onChange={value=> setQuestion2(value)}
                />
            </div>

            <div className="radio-question-container">
                <RadioQuestion 
                    question="How active are you or how active can you be for your pet?"
                    AnswerA="Not active"
                    AnswerB="Barely active"
                    AnswerC="Moderatly active"
                    AnswerD="Extremly active"
                    hideRadioButtonC = "true"
                    hideRadioButtonD = "true"
                    onChange={value=> setQuestion3(value)}
                />
            </div>

            <div className="radio-question-container">
                <RadioQuestion 
                    question="How active or energetic do you want your pet to be?"
                    AnswerA="Not active"
                    AnswerB="Barely active"
                    AnswerC="Moderatly active"
                    AnswerD="Extremly active"
                    hideRadioButtonC = "true"
                    hideRadioButtonD = "true"
                    onChange={value=> setQuestion4(value)}
                />
            </div>

            <div className="radio-question-container">
                <RadioQuestion 
                    question="What size of pet can you accomodate??"
                    AnswerA="Tiny (Lives in a Tank)"
                    AnswerB="Small"
                    AnswerC="Medium"
                    AnswerD="Large"
                    hideRadioButtonC = "true"
                    hideRadioButtonD = "true"
                    onChange={value=> setQuestion5(value)}
                />
            </div>
            

    
            <div className="radio-question-container">
                <RadioQuestion 
                    question="Do you have kids under the age of 10?"
                    AnswerA="Yes"
                    AnswerB="No"
                    hideRadioButtonC = "false"
                    hideRadioButtonD = "false"
                    onChange={value=> setQuestion6(value)}
                />
            </div>

            <div className="radio-question-container">
                <RadioQuestion 
                    question="Do you have kids over the age of 10?"
                    AnswerA="Yes"
                    AnswerB="No"
                    hideRadioButtonC = "false"
                    hideRadioButtonD = "false"
                    onChange={value=> setQuestion7(value)}
                />
            </div>

            <div className="radio-question-container">
                <RadioQuestion 
                    question="Are you allergic to fur?"
                    AnswerA="Yes"
                    AnswerB="No"
                    hideRadioButtonC = "false"
                    hideRadioButtonD = "false"
                    onChange={value=> setQuestion8(value)}
                />
            </div>

            <div className="slider-question-container">
                <SliderQuiz quesiton="How much free time do you have to spend with your pet? 
                Rate is measured in hours "
                MaxValue = '6'
                increaseValue = '0.5'
                onChange={value=> setQuestion9(value)}
                />
            </div>

            <div className="slider-question-container">
                <SliderQuiz quesiton="On a scale of 1-10, how experienced are you with owning a pet? "
                MaxValue = '10'
                increaseValue = '1'
                onChange={value=> setQuestion10(value)}
                />
            </div>

            <div className="submit-container">
                <ButtonSubmit text="Submit"
                question1Response ={question1}
                question2Response ={question2}
                question3Response ={question3}
                question4Response ={question4}
                question5Response ={question5}
                question6Response ={question6}
                question7Response ={question7}
                question8Response ={question8}
                question9Response ={question9}
                question10Response ={question10}

                />
            </div>
        
        </div>
    )
}

