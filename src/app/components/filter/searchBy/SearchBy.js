import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { SEARCH_BY } from '../../../app.config';

import './searchBy.css';

const SearchBy = ({ searchBy, onChange }) => (
    <div className="searchBy">
        <span className="searchBy-title">Search By</span>
        <div onChange={onChange}>
            <input type="radio" 
                    name="search"
                    value={SEARCH_BY.TITLE}
                    defaultChecked={searchBy === SEARCH_BY.TITLE}/> {SEARCH_BY.TITLE}
            <input type="radio" 
                    name="search"
                    value={SEARCH_BY.DIRECTOR}
                    defaultChecked={searchBy === SEARCH_BY.DIRECTOR}/> {SEARCH_BY.DIRECTOR}
        </div>
    </div>
)

SearchBy.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SearchBy;