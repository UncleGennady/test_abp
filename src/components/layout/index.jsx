import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "../header";
const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<div>Home</div>} />
                    <Route path={'/variables'} element={<div>Variables</div>} />
                </Routes>
            </main>
        </>
    );
};

export default Layout;