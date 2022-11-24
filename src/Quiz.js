import Question from "./Question"
import React from "react"
import './Quiz.css'
import { nanoid } from "nanoid"

export default function Quiz(props) {
    const [showScore, setShowScore] = React.useState(false)
    const [chosenAnswers, setChosenAnswers] = React.useState(['', '', '', '', ''])
    const correctAnswers = []

    for (let i = 0; i < 5; i++) {
        correctAnswers.push(props.questions[i].correct_answer)
    }

    const questions = props.questions.map((a, index) => <Question question={a.question} correct_answer={a.correct_answer} all_answers={a.incorrect_answers} questionNumber={index} handleClick={handleClick} chosenAnswers={chosenAnswers} showScore={showScore} key={nanoid} />)

    const [score, setScore] = React.useState(0)

    function submitAnswers(e) {
        e.preventDefault()
        let scoreToSave = 0
        for (let i = 0; i < 5; i++) {
            setChosenAnswers(...chosenAnswers, chosenAnswers[i] = document.querySelector('input[name="' + props.questions[i].question + '"]:checked').id)
            if (document.querySelector('input[name="' + props.questions[i].question + '"]:checked').value === correctAnswers[i]) {
                setScore(oldScore => oldScore + 1)
                scoreToSave++
            }
        }
        setShowScore(true)
        console.log(scoreToSave)
        props.saveData(scoreToSave)
        console.log(props.totalQuestions, props.totalPoints, localStorage.getItem('totalQuestions'), localStorage.getItem('totalPoints'))
    }

    const [amountOfAnswers, setAmountOfAnswers] = React.useState(0)
    function handleClick(e) {
        setAmountOfAnswers(document.querySelectorAll('input[type=radio]:checked').length)
    }

    return (
        <form className="quiz__page" onClick={() => handleClick()}>
            {questions}
            {!showScore ? <button onClick={submitAnswers} disabled={amountOfAnswers !== 5} className="quiz__submit">Check answers</button> :
                (<><p className="quiz__result">Your score: {score} out of 5<br />Total: {props.totalPoints + score} out of {props.totalQuestions}</p>
                    <button onClick={props.restartQuiz} className="quiz__reload">Play again</button></>)}

        </form>

    )
}