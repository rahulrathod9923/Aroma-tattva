// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Products from './Products';

// function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [newProduct, setNewProduct] = useState({ name: '', price: '', prodImages: null });
//     const [adminLoggedIn, setAdminLoggedIn] = useState(false);

//     useEffect(() => {
//         const checkAdminLogin = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/users');
//                 // Example of setting adminLoggedIn based on user data
//                 const adminUser = response.data.find(user => user.role === 'admin' && user.loggedIn);
//                 setAdminLoggedIn(!!adminUser);
//             } catch (error) {
//                 console.error('Failed to check admin login:', error);
//             }
//         };
//         checkAdminLogin();

//         const fetchProducts = async () => {
//             const response = await axios.get('http://localhost:3002/products');
//             setProducts(response.data);
//         };
//         fetchProducts();
//     }, []);

//     const handleAddProduct = async () => {
//         const formData = new FormData();
//         formData.append('name', newProduct.name);
//         formData.append('price', newProduct.price);
//         if (newProduct.prodImages) {
//             formData.append('prodImages', newProduct.prodImages);
//         }

//         const response = await axios.post('http://localhost:3002/products', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         setProducts([...products, response.data]);
//         setNewProduct({ name: '', price: '', prodImages: null });
//     };

//     const handleDeleteProduct = async (id) => {
//         await axios.delete(`http://localhost:3002/products/${id}`);
//         setProducts(products.filter(product => product.id !== id));
//     };

//     const handleUpdateProduct = async (updatedProduct) => {
//         const formData = new FormData();
//         formData.append('name', updatedProduct.name);
//         formData.append('price', updatedProduct.price);
//         if (updatedProduct.prodImages) {
//             formData.append('prodImages', updatedProduct.prodImages);
//         }

//         const response = await axios.put(`http://localhost:3002/products/${updatedProduct.id}`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         setProducts(products.map(product => product.id === updatedProduct.id ? response.data : product));
//     };

//     return (
//         <div>
//             {adminLoggedIn && (
//                 <div className="add-product-form">
//                     <h3>Add New Product</h3>
//                     <input
//                         type="text"
//                         placeholder="Product Name"
//                         value={newProduct.name}
//                         onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Price"
//                         value={newProduct.price}
//                         onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                     />
//                     <input
//                         type="file"
//                         onChange={(e) => setNewProduct({ ...newProduct, prodImages: e.target.files[0] })}
//                     />
//                     <button onClick={handleAddProduct}>Add Product</button>
//                 </div>
//             )}
//             <Products
//                 products={products}
//                 handleDelete={adminLoggedIn ? handleDeleteProduct : null}
//                 handleUpdate={adminLoggedIn ? handleUpdateProduct : null}
//             />
//         </div>
//     );
// }

// export default ProductList;



import React from 'react';
import Products from './Products';

// Product Images
import aromaTailam1 from '/assets/product-images/Aroma Abhyang Tailam.jpg';
import aromaTailam2 from '/assets/product-images/Aroma Abhyang Tailam2.jpg';
import aromaTailam3 from '/assets/product-images/Aroma Abhyang Tailam2.jpg';
import charcoalSoap1 from '/assets/product-images/Charcoal Hand Crafted Soap.jpg';
import charcoalSoap2 from '/assets/product-images/Charcoal Hand Crafted Soap2.jpg';
import charcoalSoap3 from '/assets/product-images/Charcoal Hand Crafted Soap3.jpg';
import charcoalSoap4 from '/assets/product-images/Charcoal Hand Crafted Soap3.jpg';
import hibiscusShampoo1 from '/assets/product-images/Hebiscus Keratin Shampoo.jpg';
import hibiscusShampoo2 from '/assets/product-images/Hebiscus Keratin Shampoo2.jpg';
import hibiscusShampoo3 from '/assets/product-images/Hebiscus Keratin Shampoo3.jpg';
import hibiscusShampoo4 from '/assets/product-images/Hebiscus Keratin Shampoo4.jpg';
import mintMuskSoap1 from '/assets/product-images/Mint & Musk Hand Crafted Soap.jpg';
import mintMuskSoap2 from '/assets/product-images/Mint & Musk Hand Crafted Soap2.jpg';
import mintMuskSoap3 from '/assets/product-images/Mint & Musk Hand Crafted Soap3.jpg';
import mintMuskSoap4 from '/assets/product-images/Mint & Musk Hand Crafted Soap4.jpg';
import ubtanTailam1 from '/assets/product-images/Ubtan & Abhyang Tailam.jpg';
import ubtanTailam2 from '/assets/product-images/Ubtan & Abhyang Tailam2.jpg';
import hairNourishmentOil1 from '/assets/product-images/Hair Nourshment Oil.jpg';
import herbalUbtan1 from '/assets/product-images/Harbal Shabi Ubtan.jpg';
import herbalSoapOil1 from '/assets/product-images/Herbal soap & oil pack.jpg';
import herbalSoapOil2 from '/assets/product-images/Herbal soap & oil pack2.jpg';
import herbalScrubber from '/assets/product-images/herbal.jpg';
import milkProteinShampoo1 from '/assets/product-images/Milk Protein shampoo2.jpg';
import milkProteinShampoo2 from '/assets/product-images/Milk Protein shampoo3.jpg';
import milkProteinShampoo3 from '/assets/product-images/Milk Protein shampoo4.jpg';
import equilibriumOil1 from '/assets/product-images/The Equilibrium Oil.jpg';
import equilibriumOil2 from '/assets/product-images/The Equilibrium Oil2.jpg';
import equilibriumOil3 from '/assets/product-images/The Equilibrium Oil3.jpg';

function ProductList() {
    const products = [
        { id: 1, prodImages: aromaTailam1, name: 'Aroma Abhyang Tailam', price: 19.99 },
        { id: 2, prodImages: aromaTailam2, name: 'Aroma Abhyang Tailam', price: 19.99 },
        { id: 3, prodImages: aromaTailam3, name: 'Aroma Abhyang Tailam', price: 19.99 },
        { id: 4, prodImages: charcoalSoap3, name: 'Charcoal Hand Crafted Soap', price: 19.99 },
        { id: 5, prodImages: charcoalSoap1, name: 'Charcoal Hand Crafted Soap', price: 29.99 },
        { id: 6, prodImages: charcoalSoap2, name: 'Charcoal Hand Crafted Soap', price: 9.99 },
        { id: 7, prodImages: hibiscusShampoo1, name: 'Hebiscus Keratin Shampoo', price: 49.99 },
        { id: 8, prodImages: hibiscusShampoo2, name: 'Hebiscus Keratin Shampoo', price: 49.99 },
        { id: 9, prodImages: hibiscusShampoo3, name: 'Hebiscus Keratin Shampoo', price: 49.99 },
        { id: 10, prodImages: hibiscusShampoo4, name: 'Hebiscus Keratin Shampoo', price: 49.99 },
        { id: 11, prodImages: charcoalSoap4, name: 'Charcoal Hand Crafted Soap', price: 49.99 },
        { id: 12, prodImages: ubtanTailam1, name: 'Ubtan & Abhyang Tailam', price: 49.99 },
        { id: 13, prodImages: ubtanTailam2, name: 'Ubtan & Abhyang Tailam', price: 49.99 },
        { id: 14, prodImages: herbalScrubber, name: 'Herbal Scrubber', price: 49.99 },
        { id: 15, prodImages: milkProteinShampoo1, name: 'Milk Protein Shampoo', price: 49.99 },
        { id: 16, prodImages: milkProteinShampoo2, name: 'Milk Protein Shampoo', price: 49.99 },
        { id: 17, prodImages: milkProteinShampoo3, name: 'Milk Protein Shampoo', price: 49.99 },
        { id: 18, prodImages: mintMuskSoap1, name: 'Mint & Musk Hand Crafted Soap', price: 49.99 },
        { id: 19, prodImages: mintMuskSoap2, name: 'Mint & Musk Hand Crafted Soap', price: 49.99 },
        { id: 20, prodImages: mintMuskSoap3, name: 'Mint & Musk Hand Crafted Soap', price: 49.99 },
        { id: 21, prodImages: mintMuskSoap4, name: 'Mint & Musk Hand Crafted Soap', price: 49.99 },
        { id: 22, prodImages: hairNourishmentOil1, name: 'Hair Nourshment Oil', price: 49.99 },
        { id: 23, prodImages: herbalUbtan1, name: 'Harbal Shabi Ubtan', price: 49.99 },
        { id: 24, prodImages: herbalSoapOil1, name: 'Herbal soap & oil pack', price: 49.99 },
        { id: 25, prodImages: herbalSoapOil2, name: 'Herbal soap & oil pack', price: 49.99 },
        { id: 26, prodImages: equilibriumOil1, name: 'The Equilibrium Oil', price: 49.99 },
        { id: 27, prodImages: equilibriumOil2, name: 'The Equilibrium Oil', price: 49.99 },
        { id: 28, prodImages: equilibriumOil3, name: 'The Equilibrium Oil', price: 49.99 },
    ];

    return (
        <div>
            <Products products={products} />
        </div>
    );
}

export default ProductList;
