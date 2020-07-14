import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
                <a href="/">Welcome</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    /* background-color: #dde7ea; */
    background-color: teal;
    color: #fff;
    text-align: center;

    a {
        display: inline-block;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        background-color: #034d4d;
        text-decoration: none;
        color: #fff;
        width: 150px;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;

        &:hover {
            background-color: #000;
        }
    }
`;