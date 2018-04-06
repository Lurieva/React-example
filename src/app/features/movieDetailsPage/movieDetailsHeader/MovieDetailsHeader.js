import React from 'react';

import './movieDetailsHeader.css';

import { Header, filter } from '../../../components';
import { Button } from '../../../shared';

const MovieDetailsHeader = ({ movie }) => (
    <Header isShowSearchBtn={true}>
        <div className="movie-details-container">
            <div className="movie-details-poster">
                <img className="movie-poster" 
                     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} 
                     alt={movie.title} />
            </div>
            <div className="movie-details-info">
                {movie.title}
            </div>
        </div>
    </Header>
);

export default MovieDetailsHeader;