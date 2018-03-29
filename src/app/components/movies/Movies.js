import React, { Component } from 'react';

import Movie from './movie/Movie';
import NoFilmsFound from '../noFilmsFound/NoFilmsFound';

import './Movies.css';

const Movies = (props) => {
    return (
        <div className="movies-container">
            {
                props.movies.length ? props.movies.map((movie, i) => (               
                    <Movie key={i} movie={movie}/>
                )) : <NoFilmsFound />
            }
        </div>
     );
}

export default Movies;