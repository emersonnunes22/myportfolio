import './Projects.css';
import { projetos } from './Projetos.js';
export default function ProjectsPage() {
  return (
    <ul className="Projetos">
    {projetos.map((projeto) => (
     <li key={projeto.id}>
     <h2>{projeto.titulo}</h2>
     <p>{projeto.texto}</p>
     <p className="Data">{projeto.data}</p>
     <div className="ButtonsIrLinks">
     <a href={projeto.linkSite}>
     <button>
     <p>Go site</p>
     </button>
     </a>
     <a href={projeto.linkRepo}>
     <button>
     <p>Go Repositório</p>
     </button>
     </a>
     </div>
     </li>
     ))}
    </ul>
  );
}