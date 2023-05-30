import React, { useState, useEffect } from 'react';

const PlantDevelopment = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = Math.floor(duration / 100); // Calculate the interval for each day
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === duration) {
          clearInterval(timer);
          // Additional logic when progress reaches the maximum duration (e.g., crop is fully grown)
        }
        return prevProgress + interval;
      });
    }, interval * 1000 * 60 * 60 * 24); // Interval in milliseconds (1 day = 24 hours = 24 * 60 * 60 * 1000 ms)

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div>
      <h2>Plant Development</h2>
      <p>Progress: {progress} days</p>
      <div style={{ width: '100%', background: '#e0e0e0' }}>
        <div
          style={{
            width: `${(progress / duration) * 100}%`,
            height: '20px',
            background: '#4caf50',
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default PlantDevelopment;
