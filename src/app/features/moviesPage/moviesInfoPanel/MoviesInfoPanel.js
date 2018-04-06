import React from 'react';

import './MoviesInfoPanel.css';

const MoviesInfoPanel = ({ count, children }) => (
    <div className="moviesInfoPanel">
        <div className="moviesInfoPanel__count">
        {(() => {
            switch (count) {
                case 0: return null
                case 1: return <span> {count} movie found</span>
                default: return <span> {count} movies found</span>
            }
        })()}
        </div>
        <div className="moviewInfoPanel__sortBy">
            { children }
        </div>
    </div>
)

export default MoviesInfoPanel;