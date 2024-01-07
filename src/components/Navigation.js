import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navigation = () => {
    const navigationItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className="navigation">
            <div className="container">
                <Link to="/" className="logo">
                    <button className="home-button">Mighty Oak</button>
                </Link>
                <ul className="nav-items">
                    {navigationItems.map((item) => (
                        <li key={item}>
                            <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
