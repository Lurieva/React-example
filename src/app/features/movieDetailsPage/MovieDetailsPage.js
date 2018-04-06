import React, { Component, Fragment } from 'react';

import { InfoPanel, Movies } from '../../components';
import MovieDetailsHeader from './movieDetailsHeader/MovieDetailsHeader';

    const movies = [
        // {
        //     "vote_count": 977,
        //     "id": 337167,
        //     "video": false,
        //     "vote_average": 6.2,
        //     "title": "Fifty Shades Freed",
        //     "popularity": 620.073793, 
        //     "poster_path": "\/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
        //     "original_language": "en",
        //     "original_title": "Fifty Shades Freed",
        //     "genre_ids": [18, 10749],
        //     "backdrop_path": "\/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
        //     "adult": false,
        //     "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        //     "release_date":"2018-02-07"
        // },
        // {
        //     "vote_count": 6579,
        //     "id": 269149,
        //     "video": false,
        //     "vote_average": 7.7,
        //     "title": "Zootopia",
        //     "popularity": 375.524444,
        //     "poster_path": "\/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
        //     "original_language": "en",
        //     "original_title": "Zootopia",
        //     "genre_ids": [16, 12, 10751, 35],
        //     "backdrop_path": "\/mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg",
        //     "adult": false, 
        //     "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        //     "release_date":"2016-02-11"
        // }
    ];


class MovieDetailsPage extends Component {
    state = {
        movie: {},
        director: '',
        moviesByDirector: []
    }

    componentDidMount () {
        const movieId = this.props.match.params.movieId;
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=86ec1123e778eaa75fc49be69e72ea6c`)
            .then((res) => res.json())
            .then((movie) => {
                this.setState(() => ({ movie }));
        });

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/casts?api_key=86ec1123e778eaa75fc49be69e72ea6c`)
            .then((res) => res.json())
            .then((movie) => {
                const authors = movie.crew.filter((item) => item.job === 'Director');
                console.log('ddd', authors[0])
        });
    }

    render() {
        const { movie } = this.state;

        return (
            <Fragment>
                <MovieDetailsHeader movie={movie} />
                <InfoPanel />
                <Movies movies={movies} />
            </Fragment>
        )
    }
};

export default MovieDetailsPage;