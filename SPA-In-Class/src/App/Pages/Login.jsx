import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Login = () => {
    return (
        <LoginStyled className='Home'>
            <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            Login
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;