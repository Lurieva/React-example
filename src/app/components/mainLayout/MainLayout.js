import React from 'react';

import Footer from '../footer/Footer';

import './mainLayout.css';

const MainLayout = (props) => (
    <div className="main-layout-container">
        <div className="main-layout-content">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default MainLayout;