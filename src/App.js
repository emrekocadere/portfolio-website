import './App.css';
import CustomHeader from './Components/Header/CustomHeader';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutmePage from './Components/Pages/AboutMePage/AboutMePage';
import SkillsPage from './Components/Pages/SkillsPage/SkillsPage';
import ProjectsPage from './Components/Pages/Projects/ProjectsPage';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
    return(
        <BrowserRouter>

        <Routes>
        
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutme" element={<AboutmePage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
   
        
        </Routes>

      </BrowserRouter>
    );
}

export default App;
