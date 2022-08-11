import React from 'react';
import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = ' http://www.omdbapi.com/?apikey=381da338'

const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BOWVmNjQ2YmYtY2M4ZS00NDdkLTljZmUtYTZkNmNjM2FhMWU3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    Title: "Jatt James Bond",
    Type: "movie",
    Year: "2014",
    imdbID: "tt3732110"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('James Bond');
    }, []);

    return (
        <div className='app'>
            <h1>Box-Office</h1>

            <div className="search">
                <input 
                    placeholder="Search the Box Office"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className='container'>

            </div>
        </div>
    )
}

export default App;