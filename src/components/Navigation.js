import React from 'react';

const Navigation = () => {
    const navigationItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className="navigation">
            <ul>
                {navigationItems.map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase().replace(' ', ' ')}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;