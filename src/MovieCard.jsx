import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div>
            <div className='movie'>
                <p>{movie.Year}</p>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div className='movie-details'>
                <h3>{movie.Title}</h3>
                <span>{movie.Type}</span>
            </div>
        </div>
    )
}

export default MovieCard;