import React, { Component } from 'react';

import { SEARCH_BY } from '../../../app.config';

import './searchBy.css';

class SearchBy extends Component {
    constructor(props) {
        super(props);
    }

    setSearchBy(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="searchBy">
                <span className="searchBy-title">Search By</span>
                <div onChange={this.setSearchBy.bind(this)}>
                    <input type="radio" 
                           name="search"
                           value={SEARCH_BY.TITLE}
                           defaultChecked={this.props.searchBy === SEARCH_BY.TITLE}/> Title
                    <input type="radio" 
                           name="search"
                           value="'Director"
                           value={SEARCH_BY.DIRECTOR}
                           defaultChecked={this.props.searchBy === SEARCH_BY.DIRECTOR}/> Director
                </div>
            </div>
        );
    }
}

export default SearchBy;