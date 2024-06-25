import { useState } from 'react'
import MovieDisplay from "./MovieDisplay"

const MovieForm = () => {
    const [movie, setMovie] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        const userAnswer = event.target.elements.userInput.value;
        fetchMovie(userAnswer);
    };

    const fetchMovie = async (movieName) => {
        const request = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=3c705b1d`);
        const response = await request.json();
        setMovie(response);
    };

    return (
        <>
            <form name="movieForm" onSubmit={handleChange}>
                <label>Look up movie by name:
                    <br></br>
                    <input type="text" name="userInput"></input>
                    <button type="submit">Submit</button>
                </label>
            </form>
            <MovieDisplay selectedMovie={movie} />
        </>
    )
};

export default MovieForm;