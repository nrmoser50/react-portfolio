import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Mighty Oak</h1>
                <Navigation />
                </div>
        </header>
    );
};

export default Header;