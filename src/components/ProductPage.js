import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({ selectedCrop }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Fetch products data from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    // Remove the selected product from the products list
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleCheckout = () => {
    // Perform M-Pesa payment and handle success/failure
    performMpesaPayment()
      .then(() => {
        // Payment successful, redirect to farmer's dashboard
        navigate('/dashboard');
      })
      .catch((error) => {
        // Payment failed, handle error
        console.error('M-Pesa payment error:', error);
      });
  };

  const performMpesaPayment = async () => {
    // Implement your M-Pesa payment logic here
    // This could involve making an API call to the payment gateway
    // and handling the payment response
    return new Promise((resolve, reject) => {
      // Simulating a successful payment after a 2-second delay
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const addToSelectedItems = (product) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
  };

  // Filter products based on selected crop
  const cropProducts = products.filter((product) =>
    product.crop.includes(selectedCrop)
  );

  return (
    <div>
      <h2>Product Page</h2>
      <h3>Raw Materials for {selectedCrop}:</h3>
      <ul>
        {cropProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => addToSelectedItems(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ProductPage;
