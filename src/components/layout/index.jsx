import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "../header";
import Home from '../../pages/home'
const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/variables'} element={<div>Variables</div>} />
                    <Route path={'/*'} element={<div>Oops... page not found</div>} />
                </Routes>
            </main>
        </>
    );
};

export default Layout;