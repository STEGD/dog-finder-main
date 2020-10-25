import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './TextQuestion.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function TextQuestion(props) {
    const classes = useStyles();
    
  
    return (
        <div className="text-container">
            <form className={classes.root} noValidate autoComplete="off">
           <h3>{props.question}</h3>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    onChange={(event) => props.onChange(event.target.value)}                   
                    InputLabelProps={{
                        shrink: true,
                    }}
                 />
            </form>
        </div>
    )
}
