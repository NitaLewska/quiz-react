import './App.css';
import React from 'react';
import Quiz from './Quiz';
import Intro from './Intro';

export default function App() {
  const [quizIsOn, setQuizIsOn] = React.useState(false)
  function startQuiz() {
    setQuizIsOn(true)
  }
  
  const [questions, setQuestions] = React.useState(null)

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      console.log("aaaa")
  }, [])

  function restartQuiz(e) {
    e.preventDefault()
    window.location.reload()
}

  

  return (
    <main className="App">
      {quizIsOn ? <Quiz questions={questions} restartQuiz={restartQuiz}/> : <Intro startQuiz={startQuiz} />}
    </main>
  );
}

