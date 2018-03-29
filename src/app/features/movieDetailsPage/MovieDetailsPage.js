import React, { Component } from 'react';

import InfoPanel from '../../components/infoPanel/InfoPanel';
import Movies from '../../components/movies/Movies';
import MovieDetailsHeader from './movieDetailsHeader/MovieDetailsHeader';

// const movie = {
//     "adult":false,
//     "backdrop_path":"/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg",
//     "belongs_to_collection":{
//         "id":422837,
//         "name":"Blade Runner Collection",
//         "poster_path":"/cWESb1o9lW2i2Z3Xllv9u40aNIk.jpg",
//         "backdrop_path":"/xiOw9kLNfFPoe3j3J6nHqDTT1fu.jpg"
//     },
//     "budget":150000000,
//     "genres":[
//         {"id":9648,"name":"Mystery"},
//         {"id":878,"name":"Science Fiction"},
//         {"id":53,"name":"Thriller"}
//     ],
//     "homepage":"http://bladerunnermovie.com/",
//     "id":335984,
//     "imdb_id":"tt1856101",
//     "original_language":"en",
//     "original_title":"Blade Runner 2049",
//     "overview":"Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
//     "popularity":90.03107300000001,
//     "poster_path":"/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
//     "production_companies":[
//         {"id":79529,"logo_path":null,"name":"Torridon Films","origin_country":""},
//         {"id":90768,"logo_path":null,"name":"Thunderbird Entertainment","origin_country":""},
//         {"id":101829,"logo_path":null,"name":"16:14 Entertainment","origin_country":""},
//         {"id":1645,"logo_path":null,"name":"Scott Free Productions","origin_country":""},
//         {"id":5,"logo_path":"/71BqEFAF4V3qjjMPCpLuyJFB9A.png","name":"Columbia Pictures","origin_country":"US"}
//         ,{"id":1088,"logo_path":null,"name":"Alcon Entertainment","origin_country":""}],
//         "production_countries":[
//             {"iso_3166_1":"US","name":"United States of America"}
//         ],
//         "release_date":"2017-10-04",
//         "revenue":259239658,
//         "runtime":163,
//         "spoken_languages":[
//             {"iso_639_1":"en","name":"English"}
//         ],
//         "status":"Released",
//         "tagline":"There's still a page left.",
//         "title":"Blade Runner 2049",
//         "video":false,
//         "vote_average":7.3, 
//         "vote_count":3796
//     };

    const movies = [
        {
            "vote_count": 977,
            "id": 337167,
            "video": false,
            "vote_average": 6.2,
            "title": "Fifty Shades Freed",
            "popularity": 620.073793, 
            "poster_path": "\/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
            "original_language": "en",
            "original_title": "Fifty Shades Freed",
            "genre_ids": [18, 10749],
            "backdrop_path": "\/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
            "adult": false,
            "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
            "release_date":"2018-02-07"
        },
        {
            "vote_count": 6579,
            "id": 269149,
            "video": false,
            "vote_average": 7.7,
            "title": "Zootopia",
            "popularity": 375.524444,
            "poster_path": "\/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
            "original_language": "en",
            "original_title": "Zootopia",
            "genre_ids": [16, 12, 10751, 35],
            "backdrop_path": "\/mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg",
            "adult": false, 
            "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
            "release_date":"2016-02-11"
        }
    ];


class MovieDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: []
        };
    }

    componentDidMount () {
        const movieId = this.props.match.params.movieId;
    
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=86ec1123e778eaa75fc49be69e72ea6c`)
            .then((movie) => {
                this.setState(() => ({ movie }));
        });
    }

    render() {
        return (
            <div>
                <MovieDetailsHeader movie={this.state.movie} />
                <InfoPanel />
                <Movies movies={movies} />
            </div>
        )
    }
};

export default MovieDetailsPage;