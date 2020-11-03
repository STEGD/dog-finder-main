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

    function submitSurvey(Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9) {
        console.log(Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9);
        if (Q1 !== "" && Q2 !== "" && Q3 !== "" && Q4 !== "" 
        && Q5 !== "" && Q6 !== ""&& Q7 !== "" && Q8 !== "" && Q9 !== ""){
            alert("Answers\n" + Q1 + "\n" + Q3 + "\n" +Q2 + "\n" + Q4 
            + "\n" + Q5+ "\n" + Q6+ "\n" + Q7+ "\n" + Q8 + "\n" + Q9);
            setShowResults(true) 
            // MARK: TO-DO Retrieve responses and prepare to match up with DB responses
            
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
      
    return (
        <div>
            <Button variant ="contained" color="primary"
                 onClick={() => {submitSurvey(q1, q2, q3, q4, q5, q6, q7, q8, q9)}}>

                {props.text}   
            </Button>
            { showResults ? <CardArray />: null }
           
        </div>
    )
}


