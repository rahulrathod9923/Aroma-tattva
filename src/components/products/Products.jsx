// import React, { useState } from 'react';
// import './Products.css';

// function Products({ products, handleDelete, handleUpdate }) {
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [editProduct, setEditProduct] = useState(null);

//     const handleProductClick = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleCloseModal = () => {
//         setSelectedProduct(null);
//         setEditProduct(null);
//     };

//     const handleEditProduct = (product) => {
//         setEditProduct({ ...product, prodImages: null }); // Reset prodImages for editing
//     };

//     const handleSaveProduct = () => {
//         handleUpdate(editProduct);
//         handleCloseModal();
//     };

//     return (
//         <div className="products-container">
//             {products.map((product) => (
//                 <div className="product-card-container" key={product.id}>
//                     <img className="product-card-image" src={product.prodImages} alt={product.name} />
//                     <h2 className="product-name">{product.name}</h2>
//                     <p className="product-price">Price: ${product.price}</p>
//                     {handleDelete && (
//                         <>
//                             <button onClick={() => handleProductClick(product)}>Details</button>
//                             <button onClick={() => handleEditProduct(product)}>Edit</button>
//                             <button onClick={() => handleDelete(product.id)}>Delete</button>
//                         </>
//                     )}
//                 </div>
//             ))}

//             {selectedProduct && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <button className="close-button" onClick={handleCloseModal}>X</button>
//                         <img className="modal-product-image" src={selectedProduct.prodImages} alt={selectedProduct.name} />
//                         <h2>{selectedProduct.name}</h2>
//                         <p>Price: ${selectedProduct.price}</p>
//                     </div>
//                 </div>
//             )}

//             {editProduct && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <button className="close-button" onClick={handleCloseModal}>X</button>
//                         <input
//                             type="text"
//                             value={editProduct.name}
//                             onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
//                         />
//                         <input
//                             type="number"
//                             value={editProduct.price}
//                             onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
//                         />
//                         <input
//                             type="file"
//                             onChange={(e) => setEditProduct({ ...editProduct, prodImages: e.target.files[0] })}
//                         />
//                         <button onClick={handleSaveProduct}>Save</button>
//                         <button onClick={handleCloseModal}>Cancel</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Products;


import React, { useState } from 'react';
import './Products.css';

function Products({ products }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to handle product click
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className='products-container'>
            {products.map((product) => (
                <div
                    className='product-card-container'
                    key={product.id}
                    onClick={() => handleProductClick(product)} // Open modal on click
                >
                    <img className='product-card-image' src={product.prodImages} alt={product.name} />
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='product-price'>Price: ${product.price}</p>
                </div>
            ))}

            {/* Modal for displaying product details */}
            {selectedProduct && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <button className='close-button' onClick={handleCloseModal}>X</button>
                        <img className='modal-product-image' src={selectedProduct.prodImages} alt={selectedProduct.name} />
                        <h2>{selectedProduct.name}</h2>
                        <p>Price: ${selectedProduct.price}</p>
                        {/* Add additional product details here if available */}
                        <p>Description: Lorem ipsum dolor sit amet...</p>
                        <p>Rating: 4.5/5</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
