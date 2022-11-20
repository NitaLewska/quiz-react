import './App.css';
import React from 'react';
import Quiz from './Quiz';
import Intro from './Intro';

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  function toggleQuiz() {
    setStartQuiz(true)
  }
  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [])

  const [questions, setQuestions] = React.useState(null)

  return (
    <main className="App">
      {startQuiz ? <Quiz questions={questions} /> : <Intro toggleQuiz={toggleQuiz} />}
    </main>
  );
}

