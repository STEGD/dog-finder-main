import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['1', '2', '3', '4', '5'];


export default function ComboBoxPET(props) {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  let text = `${props.combotext}`
  //setInputValue(text)
  return (
    <div>
    
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.onChange(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          props.onChange(newInputValue);

        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={props.type} variant="outlined" />}
      />
    </div>
  );
}