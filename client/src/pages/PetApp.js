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
    const[question3, setQuestion3]= useState('')
    const[showResults, setShowResults] = useState(false)
    const numbers = ["1", "2", "3", "4", "5","6","7","8"];


    function submitOnClick(q1, q2, q3){
        alert("response \n" + q1 + '\n'+q2+'\n'+q3);
        setShowResults(true)
    }

    const getSearch = e =>{
        e.preventDefault();
       console.log(question1)
       console.log(question2)
       console.log(question3)
      }
    
    return (
        <div>
        <div className="pet-info-grid-container">
           {/*<div className="searchBar"> */}
            <form onSubmit={getSearch} className="searchBar">
           <ComboBoxPET 
           pet1="dog"
           pet2="cat"
           pet3="bird"
           pet4="fish"
           pet5="hamster"
           combotext=""
           type="pet"
           onChange={value=> setQuestion1(value)}/>
           <ComboBoxPET 
           combotext=""
           pet1="tiny"
           pet2="small"
           pet3="medium"
           pet4="large"
           pet5=""
           type="size"
           onChange={value=> setQuestion2(value)}/>
           <ComboBoxPET 
           combotext=""
           pet1="2"
           pet2="3"
           pet3="4"
           pet4="5"
           pet5="6"
           type="cost"
           onChange={value=> setQuestion3(value)}/>
            <Button variant ="contained" color="primary"
                 onClick={()=>{submitOnClick(question1, question2,question3)}}>
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
          (number === question1 || number === question2 || number === question3) ?
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
