import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { SORT_BY } from '../../app.config';

import './sortBy.css';

const SortBy = ({ sortBy, onChangeSortBy }) => (
    <div className="sortBy">
        <span className="sortBy-title">Sort By</span>
        <div onChange={onChangeSortBy}>
            <input type="radio" 
                   name="sort"
                   value={SORT_BY.RELEASE_DATE}
                   defaultChecked={sortBy === SORT_BY.RELEASE_DATE}/> {SORT_BY.RELEASE_DATE}
            <input type="radio" 
                   name="sort"
                   value={SORT_BY.RATING}
                   defaultChecked={sortBy === SORT_BY.RATING}/> {SORT_BY.RATING}
        </div>
    </div>
)

SortBy.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onChangeSortBy: PropTypes.func.isRequired
}

export default SortBy;