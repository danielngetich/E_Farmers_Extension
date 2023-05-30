
import './App.css';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import CropDevelopment from './components/CropDevelopment';
import FarmerDashbord from './components/FarmerDashboard';
import FarmerLogin from './components/FarmerLogin';
import Home from './components/Home';
import FarmerNavbar from './components/FarmerNavbar';
import FarmerSignup from './components/FarmerSignup';
import PlantDevelopment from './components/PlantDevelopment';
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
