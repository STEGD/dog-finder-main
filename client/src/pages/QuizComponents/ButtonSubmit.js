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

    function dothis( Q1, Q2, Q3, Q4) {
        if(Q1 !== "" && Q2 !== "" && Q3 !== "" && Q4 !== "" ){
            alert("Answers\n" + Q1 + "\n" + Q3 + "\n" +Q2 + "\n" + Q4 );
            setShowResults(true) 
             
        }else{
            alert("Please answer all the question");
        }
      
      }

    const classes = useStyles();
    let q1 = `${props.question1Response}`;
    let q2 = `${props.question2Response}`;
    let q3 = `${props.question3Response}`;
    let q4 = `${props.question4Response}`;
    return (
        <div>
            <Button variant ="contained" color="primary"
                 onClick={()=>{dothis(q1, q2, q3, q4)}}>

                {props.text}   
            </Button>
            { showResults ? <CardArray />: null }
           
        </div>
    )
}


