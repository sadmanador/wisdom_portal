import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className='lg:max-w-7xl lg:mx-auto mx-4'>
            <Navbar></Navbar>
            <Main></Main>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );
};

export default Home;