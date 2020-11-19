import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxPet(props) {
  const [updateText, setUpdateText] = useState(null)

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
  useEffect(() => {
    if(props.reset === false){
    setUpdateText(null);
    props.onChange("")
    }

  }, [props.reset]);

  function verify(){

  }


  return (
    <div>
      {verify()}
    <Autocomplete
      id={props.type}
      clearOnEscape
      options={options}

      onChange={(event, value) => {
        setUpdateText(value)
        if(value !== null){
          props.onChange(value);
          
        }else{
          props.onChange("")
        } 
      }}
      value={updateText}
      
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.type} variant="outlined" />}
    />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/to