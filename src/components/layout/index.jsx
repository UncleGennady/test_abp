import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from "../header";
import Home from '../../pages/home'
import Variables from "../../pages/variables";
import Variable from "../../pages/variable";
import Container from "../container";
import Error from "../../pages/error";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Routes>
                        <Route path={'/'} element={<Home/>} />
                        <Route path={'/variables'} element={<Variables/>} />
                        <Route path={'/variables/:id'} element={<Variable/>} />
                        <Route path={'/*'} element={<Error/>} />
                    </Routes>
                </Container>
            </main>
        </>
    );
};

export default Layout;