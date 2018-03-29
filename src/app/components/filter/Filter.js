import React, { Component } from 'react';

import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import SearchBy from './searchBy/SearchBy';

import './filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.setSearchBy = this.setSearchBy.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    setSearchBy(event) {
        this.props.onChangSearchBy(event);
    }

    filterChange(event) {
        this.props.onFilterChange(event.target.value);
    }
    
    render() {
        return (
            <div className="filter">
                <div className="filter-title">Find your movie</div>
                <Input class="filter-input" onChange={this.filterChange}/>
                <SearchBy searchBy={this.props.searchBy} onChange={this.setSearchBy}/>
                <Button name="Search" class="filter-apply-btn" onClick={this.props.onClick}/>
            </div> 
        )
    }
}

export default Filter;