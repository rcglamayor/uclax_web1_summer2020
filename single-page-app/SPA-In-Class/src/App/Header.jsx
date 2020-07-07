import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyled>My header</HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #69bfe0;
    padding: 20px;
`;