import React from 'react';

const Navigation = () => {
    const navigationItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className="navigation">
            <ul>
                {navigationItems.map((item) => (
                    <li key={item}>
                        <link href={`#${item.toLowerCase().replace(' ', ' ')}`}>{item}</link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;