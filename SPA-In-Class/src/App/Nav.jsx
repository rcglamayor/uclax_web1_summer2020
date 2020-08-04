import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from '../common/mediaQueries.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);
    const toggleMenu = () => {
        console.log('burger click', showMenu)
        showMenuSet(!showMenu);
    }

    useEffect(()=>{
        // console.log('useEffect is here');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            // console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }

        handleWindowSizeChange();

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    },[]);

    return (
        <NavStyled>
            <div className="nested-wrapper">
                <div className="hamburger" onClick={ toggleMenu } >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                    <div className="links">
                        <NavLink to="/" exact>Welcome</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                }
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

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;

        svg {
            width: 40px;
            height: auto;
            color: #044d4d;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }

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