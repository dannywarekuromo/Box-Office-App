import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = ' http://www.omdbapi.com/?apikey=381da338'

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Batman");
    })

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
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

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => {
                            <MovieCard movie={movie}/>
                        })}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default App;