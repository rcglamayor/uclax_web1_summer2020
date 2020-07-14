import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';


const Main = () => {
    return (
        <MainStyled>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={ Login } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='/services' component={ Services } />
                    <Route path='/' component={ Home } />
                </Switch>
            </BrowserRouter>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 { 
        background-color: #acd669;
        font-size: 75px; }
    h2 { /* background-color: #eff19d; */ }
    /* h3 { background-color: #9da0f1; } */
`;