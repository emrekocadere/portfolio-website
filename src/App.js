import './App.css';
import CustomHeader from './Components/Header/CustomHeader';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutmePage from './Components/Pages/AboutMePage/AboutMePage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
    return(
        <BrowserRouter>

        <Routes>
        
        <Route path="/" element={<HomePage />}/>
        <Route path="aboutme" element={<AboutmePage/>}/>
   
        
        </Routes>

      </BrowserRouter>
    );
}

export default App;
