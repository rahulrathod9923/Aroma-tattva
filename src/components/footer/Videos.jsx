import React from 'react';
import './Videos.css'

function Videos() {
    return (
        <div className='videos-container'>
            <video className='videos-ads' controls width="500" autoPlay={true} loop={true} muted={true}>
                <source src='/assets/aroma_vid.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Videos;
