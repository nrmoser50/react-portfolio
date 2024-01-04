import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Navigation />
                {/* Add more components here */}
            </main>
        </div>
    );
};

export default App;