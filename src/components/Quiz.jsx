import React, { useState } from 'react';
import questionsData from '../data/questions.json';
import './quiz.css'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="quiz">
      {currentQuestionIndex < questionsData.length ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.prompt}</p>
          <div className="answers">
            {currentQuestion.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(choice)}
                hidden={selectedAnswer !== null}
                className={
                  selectedAnswer === choice
                    ? choice === currentQuestion.correctAnswer
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }
              >
                {choice}
              </button>
            ))}
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
          {selectedAnswer && (
            <button onClick={handleNextQuestion} className='next'>Next Question</button>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} / {questionsData.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;