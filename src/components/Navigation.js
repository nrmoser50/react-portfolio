import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navigationItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className="navigation">
            <ul>
                {navigationItems.map((item) => (
                    <li key={item}>
                        <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;