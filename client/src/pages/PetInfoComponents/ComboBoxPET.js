import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';




export default function ComboBoxPET(props) {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  let text = `${props.combotext}`
  let petType1 = `${props.pet1}`
  let petType2 = `${props.pet2}`
  let petType3 = `${props.pet3}`
  let petType4 = `${props.pet4}`
  let petType5 = `${props.pet5}`

  const options = [petType1, petType2, petType3, petType4, petType5];
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