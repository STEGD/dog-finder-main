import React, {useStates} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardLayout from './CardLayout'
import CardArray from './CardArray'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *':{
            margin: theme.spacing(1)
        },
    },
}));

export default function ButtonSubmit(props) {

    const [showResults, setShowResults] = React.useState(false);


    function dothis( Q1, Q2, Q3, Q4, Q5,Q6,Q7,Q8,Q9,Q10) {
        let baseURL =  'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app';
        if(Q1 !== "" && Q2 !== "" && Q3 !== "" && Q4 !== "" && Q5 !== "" && Q6 !== ""&& Q7 !== "" && Q8 !== "" && Q9 !== "" && Q10 !== "") {
            const dataObj = {
                "costPerYear": parseInt(Q1),
                "firstYearCost": parseInt(Q2),
                "personalActivityLevel": parseInt(Q3),
                "petActivityLevel": parseInt(Q4),
                "petSize": parseInt(Q5),
                "kidsUnderTen": Q6 == 1 ? true : false,    // 1 = Yes
                "kidsOverTen": Q7 == 1 ? true: false,      // 1 = Yes
                "allergies": Q8 == 1 ? true : false,       // 1 = Yes
                "freeTime": parseInt(Q9),
                "petExperience": parseInt(Q10)
            };

            const reqOptions = {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'data': dataObj })
            }

            fetch(`${baseURL}/api/submit`, reqOptions)
                .then(res => res.json())
                .then(data => console.log(data))

            // setShowResults(true) 
            
        } else {
            alert("Please answer all the question");
        }
      
      }

    const classes = useStyles();
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

      
    return (
        <div>
            <Button variant ="contained" color="primary"

                 onClick={()=>{dothis(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)}}>


                {props.text}   
            </Button>
            { showResults ? <CardArray />: null }
           
        </div>
    )
}


