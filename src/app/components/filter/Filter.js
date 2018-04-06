import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Input, Button } from '../../shared/';
import SearchBy from './searchBy/SearchBy';

import './filter.css';

const Filter = ({ searchBy, onClick, onChangeSearchBy, onFilterChange }) => (
    <div className="filter">
        <div className="filter-title">Find your movie</div>
        <Input className="filter-input" onChange={onFilterChange}/>
        <SearchBy searchBy={searchBy} onChange={onChangeSearchBy}/>
        <Button name="Search" className="filter-apply-btn" onClick={onClick}/>
    </div> 
)

Filter.propTypes = {
    searchBy: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onChangeSearchBy: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Filter;