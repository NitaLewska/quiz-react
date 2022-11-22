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
  const [category, setCategory] = React.useState("")

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&category=" + category)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [category])

  function restartQuiz(e) {
    e.preventDefault()
    window.location.reload()
  }

  function selectCategory() {
    setCategory(document.getElementById("select_category").value)
  }

  return (
    <main className="App">
      {quizIsOn ? <Quiz questions={questions} restartQuiz={restartQuiz} /> : <Intro startQuiz={startQuiz} selectCategory={selectCategory} />}
    </main>
  );
}

