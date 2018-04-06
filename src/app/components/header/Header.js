import React, { Component } from 'react';

import { Button, LogoName } from '../../shared';

import './header.css';

const Header = ({ isShowSearchBtn, children }) => (
    <header className="header">
        <div className="header-logo">
            <LogoName />
                { 
                    isShowSearchBtn &&  
                    <Button class="header-search-button" 
                            name='Search'
                            onClick={() => window.location = '/'}>
                    </Button>
                }
            </div>
        {children}
    </header> 
)

export default Header;