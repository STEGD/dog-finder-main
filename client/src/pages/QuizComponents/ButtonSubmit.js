import React, {useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';
import QuizCardLayout from './QuizCardLayout'
import GIF from '../pics/dog_gif.gif'

export default function ButtonSubmit(props) {

    const [showResults, setShowResults] = React.useState(false);
    const [petInfo, setPetInfo] = useState([]);
    const [inputOptions, setInputOptions] = useState(false)
    const [dataLoading, setDataLoading] = useState(true)
    let q1 = `${props.question1Response}`;
    let q2 = `${props.question2Response}`;
    let q3 = `${props.question3Response}`;
    let q4 = `${props.question4Response}`;
    let q5 = `${props.question5Response}`;
    let q6 = `${props.question6Response}`;
    let q7 = `${props.question7Response}`;
    let q8 = `${props.question8Response}`;
    let q9 = `${props.question9Response}`;
    let q10 = `${props.question10Response}`;

    useEffect( () =>{
        setDataLoading(true)
        setPetInfo([])
        if(inputOptions){
            console.log("data is being fetched")
            getData();
        }
        setInputOptions(false);
      },[inputOptions]);
    

    
    function getData(){
            let baseURL =  'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app';
            const dataObj = {
                "costPerYear": parseInt(q1,10),
                "firstYearCost": parseInt(q2,10),
                "personalActivityLevel": parseInt(q3,10),
                "petActivityLevel": parseInt(q4,10),
                "petSize": parseInt(q5,10),
                "kidsUnderTen": q6 === 1 ? true : false,    // 1 = Yes
                "kidsOverTen": q7 === 1 ? true: false,      // 1 = Yes
                "allergies": q8 === 1 ? true : false,       // 1 = Yes
                "freeTime": parseInt(q9,10),
                "petExperience": parseInt(q10,10)
            };

            const reqOptions = {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'data': dataObj })
            }

            fetch(`${baseURL}/api/submit`, reqOptions)
                .then(res => res.json())
                .then(data => setPetInfo(data.value))
    }
        
    function checkResponse() {
        if(q1 !== "" && q2 !== "" && q3 !== "" && q4 !== "" && q5 !== "" 
        && q6 !== ""&& q7 !== "" && q8 !== "" && q9 !== "" && q10 !== "") {
            // console.log(q1 + "\n" + q2 + " \n"+q3 + "\n" + q4 + " \n"+q5 + "\n" + q6 + " \n"
            // +q7 + "\n" + q8 + " \n" + q9 + "\n" + q10 + " \n")
            setInputOptions(true)
            setShowResults(true) 
        } else {
            alert("Please answer all the question");
        }
      }

      function cardOutPut(pet){
        if(dataLoading){
            setDataLoading(false);
        }
      }

    return (
        <div>
            <Button variant ="contained" color="primary"
                 onClick={()=>{checkResponse()}}>
                {props.text}   
            </Button>
            
        {showResults ? 
        <div>
            {dataLoading ? 
            <div>
                <p>Loading</p> 
                <img src={GIF} alt="loading..." />
            </div>
            : null}
        </div>
    :null}
        
        {showResults ? 
        <div className="card-display-submit">
            {Object.keys(petInfo).map(pet =>{
                cardOutPut(pet)
                return   <QuizCardLayout key ={pet} details={petInfo[pet]} /> 
            }
            )}
        </div>
        : null}
           
        </div>
    )
}
