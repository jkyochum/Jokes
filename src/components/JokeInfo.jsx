import { useState, useEffect } from 'react'

export default function JokeInfo() {
    const [formInfo, setFormInfo] = useState(
        {
            "typeOfJoke": "classic"
        }
    )

    const [jokeData, setJokeData] = useState({})

    function handleChange(event) {
        const { name, value } = event.target
        setFormInfo(() => {
            return {
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => setJokeData(data))
    }, [])

    console.log(jokeData.value)
    return (
        <div className="main">
            <form className="jokes-form" onSubmit={handleSubmit}>
                <label htmlFor="typeOfJoke">What Kind of Joke Would You Like?</label>
                <select
                    id="typeOfJoke"
                    name="typeOfJoke"
                    value={formInfo.typeOfJoke}
                    onChange={handleChange}
                >
                    <option value="classic">Classic Joke</option>
                    <option value="chuckNorris">Chuck Norris Joke</option>
                    <option value="dad">Dad Joke</option>
                </select>
                <button>Get a Joke</button>
            </form>
            <section className="jokeDisplay">
                <h1>{jokeData.value}</h1>
            </section>
        </div>
    )
}