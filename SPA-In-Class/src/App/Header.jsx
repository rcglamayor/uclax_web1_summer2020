import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyled>
            <div className="nested-wrapper">
                My header
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    /* background-color: #69bfe0; */
    background-color: teal;
`;