import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { Difficulty } from './services/quiz_service';
import { QuizType } from './Types/quiz_types';
import QuestionCard from './Components/QuestionCard';

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)

  
  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizDetails(10, Difficulty.EASY)
      setQuiz(questions)
      setScore(0)
      setCurrentStep(0);
    }
    fetchData();
  }, []);

 const StartGame=async()=>{
  const questions2: QuizType[] = await getQuizDetails(10, Difficulty.EASY);
  console.log(questions2)
  setQuiz(questions2);
  setScore(0)
  setCurrentStep(0);
  setShowResult(false);

 }
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuizType = quiz[currentStep];

    console.log("correct And: " + currentQuestion.correct_answer + "--user Selection:" + userAns)

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setShowResult(true);
    }
  }

  if (!quiz.length)
    return <h3>Loading.. </h3>

  if(showResult){
    return (<div className="question-container result-container">
      <h2>Result</h2>

      <p className="result-text">
        You final score is 
          <b> {score}</b> out of <b>{quiz.length}</b>
          {quiz.length?  <button className='RestartButton' type='reset' onClick={StartGame}>
            Start Over
          </button>:null}
      </p>
    
    </div>)
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
     
      <b> {score}</b> out of <b>{currentStep}</b>
      <QuestionCard
        
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
