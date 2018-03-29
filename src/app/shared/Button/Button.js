import React from 'react';

import './button.css';

const Button = (props) => {
    return (
        <button className={`btn button--default ${props.class}`}
                disabled={props.disabled}
                onClick={props.onClick}>
            {props.name}
        </button>
    )
};

export default Button;
