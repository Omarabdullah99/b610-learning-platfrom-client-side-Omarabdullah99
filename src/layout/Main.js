import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Navbertwo from '../component/Navbertwo/Navbertwo';
// <Header></Header>

const Main = () => {
    return (
        <div>
        <Navbertwo></Navbertwo>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;