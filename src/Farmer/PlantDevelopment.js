import React, { useState, useEffect } from 'react';

const PlantDevelopment = ({ selectedCrop }) => {
  const [cropDuration, setCropDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch crop duration from the API
    fetchCropDuration(selectedCrop);
  }, [selectedCrop]);

  const fetchCropDuration = async (crop) => {
    try {
      const response = await fetch(`API_URL/cropDuration/${crop}`); // Replace 'API_URL' with the actual URL of your API
      const data = await response.json();
      setCropDuration(data.duration);
    } catch (error) {
      console.log('Error fetching crop duration:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === cropDuration) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cropDuration]);

  return (
    <div>
      <h2>Plant Development</h2>
      <h3>Selected Crop: {selectedCrop}</h3>
      <h4>Progress:</h4>
      <progress value={progress} max={cropDuration} />
      <p>{progress}/{cropDuration} days</p>
    </div>
  );
};

export default PlantDevelopment;
