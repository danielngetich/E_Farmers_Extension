
import './App.css';
import FarmerDashbord from './components/FarmerDashboard';
import FarmerLogin from './components/FarmerLogin';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
<Home/>
<FarmerLogin/>
<FarmerDashbord/>
    </div>
  );
}

export default App;
