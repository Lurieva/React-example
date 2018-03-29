import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="movie-container">
                <div className="movie-content">
                    <img className="movie-poster" 
                         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.movie.poster_path}`} 
                         alt={this.props.movie.title} />
                    <div>
                    <Link to={`movies/${this.props.movie.id}`}>{this.props.movie.title}</Link>
                        {/* <a href={`/${this.props.movie.id}`}>{this.props.movie.title}</a> */}
                        <div>{this.props.movie.release_date}</div>
                    </div>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default Movie;