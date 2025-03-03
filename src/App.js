import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MyApp from './Components/MyApp';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
