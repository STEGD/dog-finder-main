import React from 'react'
import QuizCardLayout from './QuizCardLayout'
import './CardArray.css'

export default function CardArray() {
    return (
      
        <div className="card-display-submit">
            <QuizCardLayout petName="dog image" description="description "/>
            <QuizCardLayout petName="cat image" description="description "/>
            <QuizCardLayout petName="bird image" description="description "/>
            <QuizCardLayout petName="fish image" description="description "/>
            <QuizCardLayout petName="hamster image" description="description "/>
            <QuizCardLayout petName="rodent image" description="description "/>
            <QuizCardLayout petName="dog image" description="description "/>
            <QuizCardLayout petName="dog image" description="description "/>

        </div>
    )
}
