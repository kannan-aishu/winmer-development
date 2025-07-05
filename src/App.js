import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Route_path from './Route_path/Route_path';
import Fooder from './Component/Fooder/Fooder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route_path/>
      <Fooder/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
