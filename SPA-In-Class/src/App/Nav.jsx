import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from '../common/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
                <NavLink to="/" exact>Welcome</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
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
        background-color: #034d4d;
        text-decoration: none;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        line-height: 40px;
        width: 100%;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 0px;
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #000;
        }
        &.active {
            background-color: pink;
        }
    }
`;