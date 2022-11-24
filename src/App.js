import './App.css';
import React from 'react';
import Quiz from './Quiz';
import Intro from './Intro';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  let totalQuestions = 0;
  let totalPoints = 0;
  totalQuestions = +(localStorage.getItem('totalQuestions') || 0) + 5
  totalPoints = +(localStorage.getItem('totalPoints'))

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

  function saveData(score) {
    localStorage.setItem('totalPoints', (totalPoints + score))
    localStorage.setItem('totalQuestions', totalQuestions)
  }

  const notify = () => toast('Stats cleared', {
    icon: '✅',
    style: {
      borderRadius: '10px',
      background: 'transparent',
      color: '#fff',
      fontSize: '20px',
    }
  });

  function clearStats(e) {
    e.preventDefault()
    localStorage.clear()
    notify()
  }

  function restartQuiz(e) {
    e.preventDefault()
    window.location.reload()
  }

  function selectCategory() {
    setCategory(document.getElementById("select_category").value)
  }

  return (
    <main className="App">
      {quizIsOn ? <Quiz questions={questions} restartQuiz={restartQuiz} saveData={saveData} totalPoints={totalPoints} totalQuestions={totalQuestions} /> : <Intro startQuiz={startQuiz} selectCategory={selectCategory} clearStats={clearStats} />}
      <Toaster position="top-center" />
    </main>
  );
}

