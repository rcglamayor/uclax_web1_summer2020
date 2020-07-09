import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <div className="nested-wrapper">
                <h1>Page Title</h1>
            </div>
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