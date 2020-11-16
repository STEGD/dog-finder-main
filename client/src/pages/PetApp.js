import React, {useState, useEffect} from 'react'
import ComboBoxPET from './PetInfoComponents/ComboBoxPET';
import './PetApp.css'
import Button from '@material-ui/core/Button';
import QuizCardLayout from './QuizComponents/QuizCardLayout'


export default function PetApp() {
    const[petType, setPetType]= useState('')
    const[petSize, setPetSize]= useState('')
    const[petInformation, setPetInformation] = useState([])

    const[filterSize, setFilterSize] = useState('')
    const[filterType, setFilterType] = useState('')  
    const[filterData, setFilterData] = useState(true)


    useEffect( () =>{
      if(filterData){
         // alert("gathering data" + "\n" + petType + "\n" + petSize)
          getPetData();
          setFilterData(false);
      }
    },[filterData]);

    function getPetData(){
      let type = petType;
      let pSize = petSize;
      let size = pSize === "" ? "" : petSizeValue(petSize);
     // alert(type + " \n" + size)
      let baseURL =  'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app';
      const dataObj = {
          "petType": type,
          "petSize": size 
      };
    
      const reqOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'data': dataObj })
      }
    
      fetch(`${baseURL}/api/filterPets`, reqOptions)
        .then(res => res.json())
        .then(data => setPetInformation(data.value))
    
    }

    function submitOnClick(){
     // setFilterData(true);
     setFilterSize(petSize);
     setFilterType(petType);
      //setApplyFilter(true)
    }
    function clearOnClick(){
      setFilterSize("");
      setFilterType("");
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

    function cardOutPut(pet){
      let data = petInformation[pet];
      let valid = false;
      if(filterType === (data.type).trim() && filterSize === (data.size) ){
       valid = true;
      }else if(filterType === (data.type)){
        if(filterSize === null || filterSize === ""){
          valid = true;
        }
      }else if(filterSize ===(data.size)){
        if(filterType === null || filterType === ""){
          valid = true;
        }
      }else if(filterType === null && filterSize === null){
        valid = true;
      }else if(filterType === "" && filterSize === ""  ){
          valid = true;
      }
      return valid;
    }

    function Card(pet){
      return   <QuizCardLayout key ={pet} details={petInformation[pet]} />;
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
           onChange={value=> setPetType(value)}/>
           <ComboBoxPET 
           combotext=""
           pet1="Tiny"
           pet2="Small"
           pet3="Medium"
           pet4="Large"
           pet5=""
           type="size"
           onChange={value=> setPetSize(value)}/>
            <Button variant ="contained" color="primary"
                 onClick={()=>{submitOnClick()}}>
                SUBMIT  
            </Button>
            <Button variant ="contained" color="primary"
                 onClick={()=>{clearOnClick()}}>
                Clear  
            </Button>
            </form>
        {/* </div> */}
        </div>
       

        <div className="card-display-submit">
            {Object.keys(petInformation).map(pet =>(
            (cardOutPut(pet)=== true) ?   
              Card(pet)
            : null
            )
            )}
          </div> 

        {/*<CardArray />
        <CardArray />*/}

        </div>
    )
}
