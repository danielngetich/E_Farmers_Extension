
import React, { useState, useEffect } from 'react';

const FarmerDashboard = () => {
  const [cropTypes, setCropTypes] = useState([]);

  useEffect(() => {
    // Fetch crop types from the API
    fetchCropTypes();
  }, []);

  const fetchCropTypes = async () => {
    try {
      const response = await fetch('API_URL/crops'); // Replace 'API_URL' with the actual URL of your API
      const data = await response.json();
      setCropTypes(data);
    } catch (error) {
      console.log('Error fetching crop types:', error);
    }
  };

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <h3>Select Crop Types:</h3>
      {cropTypes.map((cropType) => (
        <label key={cropType.id}>
          {cropType.name}
          <input type="checkbox" name={cropType.name} />
        </label>
      ))}
    </div>
  );
};

export default FarmerDashboard;
