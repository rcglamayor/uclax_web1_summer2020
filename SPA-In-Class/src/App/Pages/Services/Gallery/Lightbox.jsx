import React from 'react';
import styled from 'styled-components';

const Lightbox = ({hideAction, show=false, children}) => {

    const handleHide = () => {
        hideAction();
    }

    return (
        show &&
        <LightboxStyled className='Lightbox' onClick={ handleHide }>
            <div className="light">
                {children}
            </div>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(0,0,0,.3);
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 999;

    .light {
        width: auto;
        padding: 20px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`;