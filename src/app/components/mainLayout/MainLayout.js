import React from 'react';

import Footer from '../footer/Footer';

import './mainLayout.css';

const MainLayout = ({ children }) => (
    <div className="main-layout-container">
        <div className="main-layout-content">
            {children}
        </div>
        <Footer />
    </div>
);

export default MainLayout;