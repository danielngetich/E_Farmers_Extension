import React, { useState } from 'react';

const FarmerSignup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [county, setCounty] = useState('');
  const [crops, setCrops] = useState({
    potatoes: false,
    peas: false,
    beans: false,
    maize: false,
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCountyChange = (event) => {
    setCounty(event.target.value);
  };

  const handleCropChange = (event) => {
    const { name, checked } = event.target;
    setCrops((prevCrops) => ({
      ...prevCrops,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here
    // You can access the form data in the state variables (name, phone, email, location, county, crops)
    // and send it to an API, save it to a database, or perform any other necessary action

    // Reset the form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setLocation('');
    setCounty('');
    setCrops({
      potatoes: false,
      peas: false,
      beans: false,
      maize: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Farmer Registration</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" value={phone} onChange={handlePhoneChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} required />
      </label>
      <br />
      <label>
        County:
        <input type="text" value={county} onChange={handleCountyChange} required />
      </label>
      <br />
      <label>
        Crops:
        <br />
        <label>
          Potatoes:
          <input
            type="checkbox"
            name="potatoes"
            checked={crops.potatoes}
            onChange={handleCropChange}
          />
        </label>
        <br />
        <label>
          Peas:
          <input
            type="checkbox"
            name="peas"
            checked={crops.peas}
            onChange={handleCropChange}
          />
        </label>
        <br />
        <label>
          Beans:
          <input
            type="checkbox"
            name="beans"
            checked={crops.beans}
            onChange={handleCropChange}
          />
        </label>
        <br />
        <label>
          Maize:
          <input
            type="checkbox"
            name="maize"
            checked={crops.maize}
            onChange={handleCropChange}
          />
        </label>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FarmerSignup;
