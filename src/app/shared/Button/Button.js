import React from 'react';

import './button.css';

const Button = ({ className, disabled, onClick, name }) => (
    <button className={`btn button--default ${className}`}
            disabled={disabled}
            onClick={onClick}>
        {name}
    </button>
)

export default Button;
