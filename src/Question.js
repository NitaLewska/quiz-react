import './Question.css'
import he from 'he'

export default function Question(props) {
    props.incorrect_answers.splice((Math.floor(Math.random() * 3)), 0, props.correct_answer)
    let answers = props.incorrect_answers.map(a => <>
        <input type="radio" value={a} name={props.question} id={a}/>
        <label for={a}>{he.decode(a)}</label>
    </>)
    return (
        <fieldset className="question" >
            <legend className="question__text">{he.decode(props.question)}</legend>
            {answers}
        </fieldset>
    )
}