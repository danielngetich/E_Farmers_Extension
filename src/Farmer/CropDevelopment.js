import React, { useState, useEffect } from 'react';

const CropDevelopment = ({ selectedCrop }) => {
  const [rawMaterials, setRawMaterials] = useState([]);

  useEffect(() => {
    // Fetch raw materials for the selected crop from the API
    fetchRawMaterials(selectedCrop);
  }, [selectedCrop]);

  const fetchRawMaterials = async (crop) => {
    try {
      const response = await fetch(`API_URL/rawMaterials/${crop}`); // Replace 'API_URL' with the actual URL of your API
      const data = await response.json();
      setRawMaterials(data);
    } catch (error) {
      console.log('Error fetching raw materials:', error);
    }
  };

  return (
    <div>
      <h2>Crop Development</h2>
      <h3>Selected Crop: {selectedCrop}</h3>
      <h4>Raw Materials:</h4>
      {rawMaterials.map((material) => (
        <div key={material.id}>
          <p>{material.name}</p>
          <p>Quantity: {material.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CropDevelopment;
