import './Intro.css'

export default function Intro(props) {
    return (
        <section className='intro'>
        <h1 className='intro__heading'>Quizzical</h1>
        <p className='intro__description'>This is my solo project inspired by the Scrimba React course</p>
        <button onClick={props.startQuiz} className='start__quiz'>Start Quiz</button>
        </section>
    )
}