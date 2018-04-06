import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Movie.css';

const Movie = ({ movie }) => (
    <div className="movie-container">
        <div className="movie-content">
            <img className="movie-poster" 
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} 
                 alt={movie.title} />
            <div>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <div>{movie.release_date}</div>
            </div>
        </div>
    </div>
)

export default Movie;