import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxPet(props) {
  let petType1 = `${props.pet1}`
  let petType2 = `${props.pet2}`
  let petType3 = `${props.pet3}`
  let petType4 = `${props.pet4}`
  let petType5 = `${props.pet5}`
  let petType6 = `${props.pet6}`
  let petType7 = `${props.pet7}`

  let options;
  if(petType5 !== ""){
    options = [petType1, petType2, petType3, petType4, petType5, petType6,petType7];

  }else{
    options = [petType1, petType2, petType3, petType4];

  }

  
  return (
    <Autocomplete
      id={props.type}
      options={options}
    
      onChange={(event, value) => {
        if(value !== null){
          props.onChange(value);
        }else{
          props.onChange("")
        }
      }}
    
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.type} variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/to