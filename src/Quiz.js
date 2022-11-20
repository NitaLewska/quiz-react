import Question from "./Question"
import React from "react"
import './Quiz.css'

export default function Quiz(props) {

    const questions = props.questions.map(a => <Question question={a.question}  correct_answer={a.correct_answer} incorrect_answers={a.incorrect_answers}/>)
    console.log(props.questions.incorrect_answers)
    return(
        <form className="quiz__page">{questions}</form>
    )
}