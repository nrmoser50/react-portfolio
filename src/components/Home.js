import React from 'react';

const Home = () => {
   
    return (
        <div className="home-page">
        <div>
            <h2>Long days, pleasant nights!</h2>
        </div>
        <div className="selfie"> 
            <img src={require('../images/art.jpg')} alt='Art' style={{ width: '100px', height: 'auto' }} />
        </div>
        </div>
       
    );
};

export default Home;