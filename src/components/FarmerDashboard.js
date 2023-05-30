// function FarmerDashbord(){
//     return(
//         <>
//         <h3>
//             Welcome farmer this is your online extension service
//         </h3>
//         <div>
//         <p>Choose a crop you want to plant</p>
//         <select>
//             <option>Potatoes</option>
//             <option>Beans</option>
//             <option>Peas</option>
//             <option>Maize</option>
//             <option>Dairy</option>
//         </select>
//         </div>
//         <div>
//             <p>Requirment for planting the crop choosen</p>
//             <h1>Display all requirment</h1>
//         </div>
//         <div>
//             <button>Start planting</button>
//             <p>Once a farmer click on start it will now count days for the crop 
//                 and give farmer notification for sparying ,and give option for uploading image for crops for advice
//             </p>
//         </div>
//         <div><button>Shop quality seeds and other requirement</button></div>
//         <div>
//             <h1>Market prices</h1>
//             <h2>Real time Market prices for the planted crop from nearby markets </h2>
//         </div>
//         </>
//     )
// }
// export default FarmerDashbord;
import React, { useState } from 'react';

const FarmersDashboard = () => {
  const [selectedCrops, setSelectedCrops] = useState([]);

  const handleCropChange = (e) => {
    const cropValue = e.target.value;
    if (selectedCrops.includes(cropValue)) {
      setSelectedCrops(selectedCrops.filter((crop) => crop !== cropValue));
    } else {
      setSelectedCrops([...selectedCrops, cropValue]);
    }
  };

  return (
    <div>
      <h2>Farmer's Dashboard</h2>
      <label>
        <input
          type="checkbox"
          value="potatoes"
          checked={selectedCrops.includes("potatoes")}
          onChange={handleCropChange}
        />
        Potatoes
      </label>
      <label>
        <input
          type="checkbox"
          value="peas"
          checked={selectedCrops.includes("peas")}
          onChange={handleCropChange}
        />
        Peas
      </label>
      <label>
        <input
          type="checkbox"
          value="beans"
          checked={selectedCrops.includes("beans")}
          onChange={handleCropChange}
        />
        Beans
      </label>
      <label>
        <input
          type="checkbox"
          value="maize"
          checked={selectedCrops.includes("maize")}
          onChange={handleCropChange}
        />
        Maize
      </label>

      {selectedCrops.length > 0 && (
        <div>
          <h3>Selected Crops:</h3>
          <ul>
            {selectedCrops.map((crop) => (
              <li key={crop}>{crop}</li>
            ))}
          </ul>
          {/* Display additional information or data related to the selected crops */}
        </div>
      )}
    </div>
  );
};

export default FarmersDashboard;
