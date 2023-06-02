
import './App.css';
import AdminLogin from './Admin/AdminLogin.js';
import AdminPage from './Admin/AdminPage';
import CropDevelopment from './Farmer/CropDevelopment';
import FarmerDashbord from './Farmer/FarmerDashboard';
import FarmerLogin from './Farmer/FarmerLogin';
import Home from './components/Home';
import FarmerNavbar from './Farmer/FarmerNavbar';
import FarmerSignup from './Farmer/FarmerSignup';
import PlantDevelopment from './Farmer/PlantDevelopment';
import ProductPage from './components/ProductPage';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/navbar' element={<FarmerNavbar/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/flogin' element={<FarmerLogin/>}/>
      <Route path='/dashboard' element={<FarmerDashbord/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/cropdevelopment' element={<CropDevelopment/>}/>
      <Route path='/farmersignup' element={<FarmerSignup/>}/>
      <Route path='/plantdevelopment' element={<PlantDevelopment/>}/>
      <Route path='/productpage' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
