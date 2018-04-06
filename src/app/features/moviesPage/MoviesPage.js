import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from '../../app.config';

import { Filter, Header, Footer, InfoPanel, Movies, SortBy }   from '../../components';
import MoviesInfoPanel from './moviesInfoPanel/MoviesInfoPanel';
import { SEARCH_BY, SORT_BY, API_KEY } from '../../app.config';
 
class MoviesPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE,
        filter: '',
        sortBy: SORT_BY.RELEASE_DATE
    }

    getMovies(urlPart) {
        const url = `${BASE_URL}${urlPart}`;

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            this.setState(() => ({ movies: res.results }));
        });
    }

    applyFilter = () => {
        let url = '';
        let sortBy = '';
        
        // if (this.state.sortBy === SORT_BY.RATING) {
        //     sortBy = 'sort_by=vote_average.desc';
        // }

        // if (this.state.sortBy === SORT_BY.RELEASE_DATE) {
        //     sortBy = 'sort_by=release_date.desc';
        // }

        if (!this.state.filter) {
            url = `discover/movie?${API_KEY}&${sortBy}`;
        } else {
            if (this.state.searchBy === SEARCH_BY.TITLE) {
                url = `search/movie?${API_KEY}&query=${this.state.filter}&${sortBy}`;
            }
        }

        this.getMovies(url);    
    }

    setSearchBy = (event) => {
        const { target } = event;

        this.setState({
            searchBy: target.value
        });
    }

    setFilter = (event) => {
        const { target } = event;

        this.setState({
            filter: target.value
        });
    }

    setSortBy = (event) => {
        const { target } = event;

        this.setState({
            sortBy: target.value
        });
    }

    render() {
        const { movies, sortBy, ...data } = this.state;

        return (
            <Fragment>
                <Header isShowSearchBtn={false}>
                    <Filter {...data}
                            onChangeSearchBy={this.setSearchBy}
                            onFilterChange={this.setFilter}
                            onClick={this.applyFilter} />
                </Header>
                <InfoPanel>
                    <MoviesInfoPanel count={movies.length}>
                        <SortBy sortBy={sortBy}
                                onChangeSortBy={this.setSortBy}/>
                    </MoviesInfoPanel>
                </InfoPanel>
                <Movies movies={movies}/>
            </Fragment>
        )
    }
};

export default MoviesPage;