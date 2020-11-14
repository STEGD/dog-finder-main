import React, {useState} from 'react'
import ComboBoxPET from './PetInfoComponents/ComboBoxPET';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import './PetApp.css'
import CardArray from './QuizComponents/CardArray';
import Button from '@material-ui/core/Button';
import PetCard from './PetInfoComponents/PetCard'

function AppearCard(props){
    if(props.value === 1){
      return  "0"
    }
}


export default function PetApp() {
    const[question1, setQuestion1]= useState('')
    const[question2, setQuestion2]= useState('')
  
    const[showResults, setShowResults] = useState(false)
    const numbers = ["1", "2", "3", "4", "5","6","7","8"];


    function submitOnClick(q1, q2){
      let size = q2 === "" ? "" : petSizeValue(q2);
      let baseURL =  'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app';
      const dataObj = {
          "petType": q1,
          "petSize": size 
      };

      const reqOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'data': dataObj })
      }

      fetch(`/api/filterPets`, reqOptions)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function petSizeValue(petSize){
      // default size to Tiny 
      let size;
      if (petSize === 'Tiny') {
        size = 1;
      } else if (petSize === 'Small'){
        size = 2;
      } else if (petSize === 'Medium'){
        size = 3;
      } else if (petSize === 'Large'){
        size = 4;
      }
      return size;
    }

    return (
        <div>
        <div className="pet-info-grid-container">
           {/*<div className="searchBar"> */}
            <form  className="searchBar">
           <ComboBoxPET 
           pet1="Dog"
           pet2="Cat"
           pet3="Bird"
           pet4="Fish"
           pet5="Small Mammal"
           pet6="Rock"
           pet7="Reptile"
           combotext=""
           type="pet"
           onChange={value=> setQuestion1(value)}/>
           <ComboBoxPET 
           combotext=""
           pet1="Tiny"
           pet2="Small"
           pet3="Medium"
           pet4="Large"
           pet5=""
           type="size"
           onChange={value=> setQuestion2(value)}/>
            <Button variant ="contained" color="primary"
                 onClick={()=>{submitOnClick(question1, question2)}}>
                SUBMIT  
            </Button>
            </form>
        {/* </div> */}
        </div>
        { (showResults ===false) ?
        <div className="card-display-submit">
        {numbers.map(number =>( 
          <PetCard petName="dog image" description="description "/>
            ))}
         </div> 
            : null }

        { showResults ?
        <div className="card-display-submit">
        {numbers.map(number =>( 
          (number === question1 || number === question2) ?
         <PetCard petName="name" description="description "/>

          : null
            ))}
         </div> 
            : null }
        


        {/*<CardArray />
        <CardArray />*/}

        </div>
    )
}
