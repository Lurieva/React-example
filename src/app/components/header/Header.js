import React, { Component } from 'react';

import LogoName from '../../shared/LogoName/LogoName';
import Button from '../../shared/Button/Button';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location = '/movies';
    }

    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <LogoName />
                    { 
                        this.props.isShowSearchBtn ?  
                            <Button class="header-search-button" 
                                    name='Search'
                                    onClick={this.handleClick}>
                            </Button> : null
                    }
                </div>
                {this.props.children}
            </header> 
        )
    }
}

export default Header;