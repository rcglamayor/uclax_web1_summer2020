import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({ item }) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img src={ item.image } alt={ item.title }/>
            <div className="title">{ item.title }</div>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    margin: 20px;
    
    img {
        display: block;
    }

    .category {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 10px;
        font-size: 12px;
        text-align: right;
        background-color: rgba(255,255,100, .5);
    }
    .title {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 10px;
        font-size: 20px;
        background-color: rgba(255,255,100, .5);
    }
`;