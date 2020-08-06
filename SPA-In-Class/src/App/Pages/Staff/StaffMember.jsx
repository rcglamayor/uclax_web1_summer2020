import React, { useState } from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries.js';

import Lightbox from '../Services/Gallery/Lightbox.jsx';

const StaffMember = ({member}) => {

    const [ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }
    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name } onClick={ turnOn }/>
            <div className="title">{ member.name }</div>
            <Lightbox show={ showLBox } hideAction={ turnOff }>
                <img src={ member.image } alt={ member.name }/>
                <h3>{ member.name }</h3>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    margin: 20px;

    width: 200px;

    @media ${mq.tablet} {
        width: 130px;
    }
    @media ${mq.desktop} {
        width: 200px;
    }

    img {
        display: block;
        max-width: 100%;

    }
    .title {
        background-color: maroon;
        color: #fff;
        padding: 5px;
    }
`;