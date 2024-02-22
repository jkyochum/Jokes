export default function JokeInfo() {

    return (
        <div className="main">
            <form>
                <label htmlFor="jokeSelector">What Kind of Joke?</label>
                <select>
                    <option>--Select--</option>
                    <option>Classic Jokes</option>
                    <option>Chuck Norris Jokes</option>
                    <option>Dad Jokes</option>
                </select>
                <button>Get a Joke</button>
            </form>
        </div>
    )
}