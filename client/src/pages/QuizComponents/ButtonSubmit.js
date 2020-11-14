import React, {useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import QuizCardLayout from './QuizCardLayout'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *':{
            margin: theme.spacing(1)
        },
    },
}));

export default function ButtonSubmit(props) {

    const [showResults, setShowResults] = React.useState(false);
    const [petInfo, setPetInfo] = useState([]);
    const [inputOptions, setInputOptions] = useState(false)
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
        if(inputOptions){
            getData();
        }
        setInputOptions(false);
      },[inputOptions]);
    

    
    function getData(){
            let baseURL =  'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app';
            const dataObj = {
                "costPerYear": parseInt(q1),
                "firstYearCost": parseInt(q2),
                "personalActivityLevel": parseInt(q3),
                "petActivityLevel": parseInt(q4),
                "petSize": parseInt(q5),
                "kidsUnderTen": q6 == 1 ? true : false,    // 1 = Yes
                "kidsOverTen": q7 == 1 ? true: false,      // 1 = Yes
                "allergies": q8 == 1 ? true : false,       // 1 = Yes
                "freeTime": parseInt(q9),
                "petExperience": parseInt(q10)
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
        
    function dothis( Q1, Q2, Q3, Q4, Q5,Q6,Q7,Q8,Q9,Q10) {
        if(q1 !== "" && q2 !== "" && q3 !== "" && q4 !== "" && q5 !== "" 
        && q6 !== ""&& q7 !== "" && q8 !== "" && q9 !== "" && q10 !== "") {
            setInputOptions(true)
            //getData()
            
            setShowResults(true) 
        } else {
            alert("Please answer all the question");
        }
      }

      function updateINT_Text(value){
        let textValue = ""+(value).toString();
        return textValue;
    }

    const classes = useStyles();

    return (
        <div>
            <Button variant ="contained" color="primary"
                 onClick={()=>{dothis(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)}}>
                {props.text}   
            </Button>
            

        {showResults ? 
        <div className="card-display-submit">
            {Object.keys(petInfo).map(pet =>{
            return   <QuizCardLayout key ={pet} details={petInfo[pet]} />
            }
            )}
        </div>
        : null}
           
        </div>
    )
}
