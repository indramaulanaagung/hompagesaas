import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Footer from './pages/Footer/Footer';
import NavbarSc from './pages/commponent/NavbarSc';


function App() {
  return (
    <Router>
       <NavbarSc />
       <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/Footer' element={<Footer />} />
       </Routes>
    </Router>
 
  );
}

export default App;
