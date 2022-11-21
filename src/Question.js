import './Question.css'
import he from 'he'
import { nanoid } from 'nanoid'

export default function Question(props) {
    if(props.all_answers.length === 3) {
    props.all_answers.splice((Math.floor(Math.random() * 3)), 0, props.correct_answer)}
    let answers = props.all_answers.map((answer, index) => <div key={nanoid}>
        <input type="radio" value={answer} name={props.question} id={"" + props.questionNumber + index}/>
        <label for={"" + props.questionNumber + index} className={(answer === props.correct_answer && props.showScore)?"red":((props.showScore)?'results':'')}>{he.decode(answer)}</label>
    </div>)
    return (
        <fieldset className="question" >
            <legend className="question__text" >{he.decode(props.question)}</legend>
            {answers}
        </fieldset>
    )
}