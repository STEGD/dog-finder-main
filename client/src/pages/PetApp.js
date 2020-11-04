import React from 'react'
import ComboBoxPET from './PetInfoComponents/ComboBoxPET';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import './PetApp.css'
import CardArray from './QuizComponents/CardArray';


export default function PetApp() {
    return (
        <div>
        <div className="grid-container">
           <div className="searchBar">
           <ComboBoxPET type="dog"/>
           <ComboBoxPET type="breed"/>
           <ComboBoxPET type="other"/>
           <ButtonSubmit text="submit"/>
            </div>
        </div>
        <CardArray />
        <CardArray />

        </div>
    )
}
