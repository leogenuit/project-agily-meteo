import React from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div className="homepage">
            <Navigation />
            <SearchBar />
            <Card />
            
        </div>
    );
};

export default Home;