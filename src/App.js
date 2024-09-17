import logo from './logo.svg';
import './App.css';
import Navbar from './pages/commponent/Navbar';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/Footer' element={<Footer />} />
       </Routes>
    </Router>
 
  );
}

export default App;
