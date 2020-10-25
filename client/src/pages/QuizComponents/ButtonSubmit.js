import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *':{
            margin: theme.spacing(1)
        },
    },
}));


function dothis(){
    alert
}

function dothis(){
   // alert("Your answers are being verified")
}


export default function ButtonSubmit(props) {
    

    const classes = useStyles();
    return (
        <div>
            <Button variant ="contained" color="primary" onClick={dothis()}>
                {props.text}
              
            </Button>
            <h1>{props.question1Response}</h1>
               <h1>{props.question2Response}</h1>
               <h1>{props.question3Response}</h1>
               <h1>{props.question4Response}</h1>
               <h1>{props.question5Response}</h1>
        </div>
    )
}
