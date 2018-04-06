import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Movie from './movie/Movie';
import NoFilmsFound from '../noFilmsFound/NoFilmsFound';

import './Movies.css';

const Movies = ({ movies }) => (
    <div className="movies-container">
        {
            movies.length ? movies.map((movie, i) => (               
                <Movie key={i} movie={movie}/>
            )) : <NoFilmsFound />
        }
    </div>
)

Movies.propTypes = {
    movies: PropTypes.array
}

export default Movies;