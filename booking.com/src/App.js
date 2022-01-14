
import './App.css';
import Footer from './Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/carrentals">Car Rental</Link>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
