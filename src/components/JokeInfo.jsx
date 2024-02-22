import { useState } from 'react'

export default function JokeInfo() {
    const [formInfo, setFormInfo] = useState(
        {
            "typeOfJoke": "classic"
        }
    )

    console.log(formInfo)


    function handleChange(event) {
        const { name, value } = event.target
        setFormInfo(() => {
            return {
                [name]: value
            }
        })
    }


    return (
        <div className="main">
            <form>
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
        </div>
    )
}