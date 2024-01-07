import React from 'react';
import '../index.css';

const Home = () => {
   
    return (
        <div className="home-page">
        <body>
            <h2>Long days, pleasant nights!</h2>
        </body>
        <div className="selfie"> 
            <img src={require('../images/art.jpg')} alt='Art' style={{ width: '100px', height: 'auto' }} />
        </div>
        </div>
       
    );
};

export default Home;