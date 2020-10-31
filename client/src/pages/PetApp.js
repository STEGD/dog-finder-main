import React from 'react'
import ComboBoxPET from './PetInfoComponents/ComboBoxPET';
import ButtonSubmit from './QuizComponents/ButtonSubmit';
import './PetApp.css'


export default function PetApp() {
    return (
        <div className="grid-container">
           <p>This is the pet info page</p>
           <div className="searchBar">
           <ComboBoxPET type="dog"/>
           <ComboBoxPET type="breed"/>
           <ComboBoxPET type="other"/>
           <ButtonSubmit text="submit"/>
            </div>
        </div>
    )
}
