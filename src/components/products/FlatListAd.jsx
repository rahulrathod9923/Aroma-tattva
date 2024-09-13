import React from 'react';
import FlatList from 'flatlist-react';
import tailam from '/assets/product-images/Aroma Abhyang Tailam.jpg';
import soap1 from '/assets/product-images/Charcoal Hand Crafted Soap2.jpg';
import soap2 from '/assets/product-images/Charcoal Hand Crafted Soap3.jpg';
import shampoo from '/assets/product-images/Hebiscus Keratin Shampoo.jpg';
import soap4 from '/assets/product-images/Mint & Musk Hand Crafted Soap.jpg';
import ubtanTailam from '/assets/product-images/Ubtan & Abhyang Tailam.jpg';
import './FlatListAd.css';

function FlatListAd() {
    const flatListAdImages = [
        { id: 1, prodImages: soap1 },
        { id: 2, prodImages: soap2 },
        { id: 3, prodImages: shampoo },
        { id: 4, prodImages: tailam },
        { id: 5, prodImages: soap4 },
        { id: 6, prodImages: ubtanTailam },
        { id: 7, prodImages: soap1 },
        // { id: 8, prodImages: prodImages },
        // { id: 9, prodImages: prodImages }
    ];

    const renderImagesFlat = (image, idx) => {
        return (
            <li key={idx}>
                <img
                    src={image.prodImages}
                    alt={`Image ${image.id}`}
                />
                <p>Product ID: {image.id}</p>
            </li>
        );
    };

    return (
        <div className='flatlist-container'>
            <ul>
                <FlatList
                    list={flatListAdImages}
                    renderItem={(item, idx) => renderImagesFlat(item, idx)}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </ul>
        </div>
    );
}

export default FlatListAd;
