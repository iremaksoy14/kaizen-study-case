import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TestiMonials from './components/TestiMonials/TestiMonials';

function MainPage(props) {
    return (
        <div>
        <Header/>
        <TestiMonials></TestiMonials>
        <Footer/>
      </div>
    );
}

export default MainPage;