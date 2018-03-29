import React, { Component } from 'react';

import { BASE_URL } from '../../app.config';
// import './MainPage.css';

import Footer from '../../components/footer/Footer';
import InfoPanel from '../../components/infoPanel/InfoPanel';
import MainPageHeader from './mainPageHeader/MainPageHeader';
import Movies from '../../components/movies/Movies';
import { Filter, Header }   from '../../components';
import { SEARCH_BY, API_KEY } from '../../app.config';
 
class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchBy: SEARCH_BY.TITLE,
            filter: ''
        };

        this.applyFilter = this.applyFilter.bind(this);
        this.setSearchBy = this.setSearchBy.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    getMovies(urlPart) {
        const url = `${BASE_URL}${urlPart}`;

        console.log('url', url);
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            this.setState(() => ({ movies: res.results }));
        });
    }

    applyFilter() {
        let url = '';

        if (!this.state.filter) {
            url = `discover/movie?${API_KEY}`;
        } else {
            if (this.state.searchBy === SEARCH_BY.TITLE) {
                url = `search/movie?${API_KEY}&query=${this.state.filter}`;
            }
    
            if (this.state.searchBy === SEARCH_BY.DIRECTOR) {
                url = `search/person?${API_KEY}&query=${this.state.filter}`;
            }
    
        }

        
        this.getMovies(url);    
    }

    setSearchBy(value) {
        this.setState({
            searchBy: value
        });
    }

    setFilter(value) {
        this.setState({
            filter: value
        });
    }

    render() {
        return (
            <div>
                <Header isShowSearchBtn={false}>
                    <Filter searchBy={this.state.searchBy}
                            onChangSearchBy={this.setSearchBy}
                            filter={this.state.filter}
                            onFilterChange={this.setFilter}
                            onClick={this.applyFilter} />
                </Header>
                <InfoPanel/>
                <Movies movies={this.state.movies}/>
            </div>
        )
    }
};

export default MainPage;