import React from 'react';

import './movieDetailsHeader.css';

import Header from '../../../components/header/Header';
import Filter  from '../../../components/filter/Filter';
import Button from '../../../shared/Button/Button';

const MovieDetailsHeader = (props) => (
    <Header isShowSearchBtn={true}>
        <div className="movie-details-container">
            <div className="movie-details-poster">
                <img className="movie-poster" 
                     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.movie.poster_path}`} 
                     alt={props.movie.title} />
            </div>
            <div className="movie-details-info"></div>
        </div>
    </Header>
);

export default MovieDetailsHeader;