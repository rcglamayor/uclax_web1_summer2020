import React from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries.js';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name }/>
            <div className="title">{ member.name }</div>
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