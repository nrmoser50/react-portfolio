import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
    return (
        <div>
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <button className="home-button">Mighty Oak</button>
                </Link>
                </div>
        </header>
        </div>
       
    );
};

export default Home;