import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    
    const ImageList = props.images.map(image => {
       return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="image-container">{ImageList}</div> 
    );
}


export default ImageList;