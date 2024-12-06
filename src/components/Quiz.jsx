import React from 'react'
import { useState } from 'react'
import './quiz.css'

const Quiz = () => {
  return (
    <div className="quiz">
        <h1>Question 1</h1>
        <h2>What color is a carrot?</h2>
        <h3>Correct: 0 | Incorrect: 0</h3>
        
        <br />

        <div className="options">
            <button>red</button>
            <button>yellow</button>
            <button>I think its uhh... I think its a carrot</button>
            <button>orange</button>
        </div>
    </div>
  )
}

export default Quiz;