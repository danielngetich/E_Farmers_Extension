import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminPage = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const paymentSuccess = location.state?.paymentSuccess || false;

  return (
    <div>
      <h2>Admin Page</h2>
      {paymentSuccess ? <p>Payment Successful</p> : <p>Payment Failed</p>}
      <h3>Selected Items:</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
