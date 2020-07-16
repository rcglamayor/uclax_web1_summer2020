import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Services = () => {
    return (
        <ServicesStyled className='Home'>
            <Helmet>
                <title>Services :: SPA App</title>
            </Helmet>
            Services
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`

`;