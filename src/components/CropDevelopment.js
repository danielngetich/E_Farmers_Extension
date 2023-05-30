import React from 'react';

const CropDevelopment = ({ selectedCrops }) => {
  const cropRawMaterials = {
    potatoes: {
      rawMaterials: ['Seed potatoes', 'Fertilizer', 'Pesticides'],
      duration: '90 days',
    },
    peas: {
      rawMaterials: ['Pea seeds', 'Compost', 'Irrigation system'],
      duration: '60 days',
    },
    beans: {
      rawMaterials: ['Bean seeds', 'Mulch', 'Trellis'],
      duration: '75 days',
    },
    maize: {
      rawMaterials: ['Maize seeds', 'Manure', 'Herbicides'],
      duration: '120 days',
    },
  };

  const handleBuy = () => {
    // Logic for handling the "Buy" button click
    console.log('Buying raw materials...');
  };

  const handlePlant = () => {
    // Logic for handling the "Plant" button click
    console.log('Proceeding to plant...');
  };

  return (
    <div>
      <h2>Crop Development</h2>
      {selectedCrops.map((crop) => (
        <div key={crop}>
          <h3>{crop} Raw Materials:</h3>
          <ul>
            {cropRawMaterials[crop].rawMaterials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
          <p>Ripening Duration: {cropRawMaterials[crop].duration}</p>
          <button onClick={handleBuy}>Buy Raw Materials</button>
          <button onClick={handlePlant}>Proceed to Plant</button>
        </div>
      ))}
    </div>
  );
};

export default CropDevelopment;
