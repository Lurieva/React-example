import React from 'react';

import './notFound.css';

import { Button } from '../../shared';

const NotFound = () => (
    <div className="notFound-container">
        Page doesn`t Found
        <Button name='Back to Main Page'
                onClick={() => window.location = '/'}>
        </Button>
    </div> 
);

export default NotFound;