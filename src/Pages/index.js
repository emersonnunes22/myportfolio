import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';
import SkillsPage from '../Pages/Skills';
export default function PagesRoutes() {
  return (
     <Routes>
     <Route exact path="/" element={<HomePage/>} />
     <Route path="/projetos" element={<ProjectsPage/>} />
     <Route path="/habilidades" element={<SkillsPage />} />
     </Routes>
  );
}