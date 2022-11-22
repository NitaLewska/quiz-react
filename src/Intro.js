import './Intro.css'

export default function Intro(props) {
    return (
        <section className='intro'>
            <h1 className='intro__heading'>Quizzical</h1>
            <p className='intro__description'>This is my solo project inspired by the Scrimba React course</p>
            <p className='select_category__label'>choose category</p>
            <select id="select_category" onChange={props.selectCategory}>
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                <option value="11">Film</option>
                <option value="12">Music</option>
                <option value="13">Musicals &amp; Theatres</option>
                <option value="14">Television</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Computers</option>
                <option value="19">Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
                <option value="30">Gadgets</option>
                <option value="31">Japanese Anime &amp; Manga</option>
                <option value="32">Cartoon &amp; Animations</option>
            </select>

            <button onClick={props.startQuiz} className='start__quiz'>Start Quiz</button>
        </section>
    )
}