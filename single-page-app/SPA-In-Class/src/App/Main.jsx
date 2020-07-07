import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>Page Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Subtitle</h3>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 { 
        background-color: #acd669;
        font-size: 75px; }
    h2 { 
        background-color: #eff19d;
        padding: 20px; }
    h3 {
        background-color: #9da0f1;
        padding: 20px;
    }
`;