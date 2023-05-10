import './Home.css';
import { motion } from "framer-motion";
import Ilustration from './Ilustration.svg';
export default function HomePage() {
  return (
    <div className="Home">
    <div className="Apresentacao">
    <div className="Titulo">
    <h1>Front End Developer<span style={{color: "#8A2BE2"}}>.</span></h1>
    </div>
    <div className="SubTitulo">
    <p>Meu Nome é <a className="MyName"><strong>Emerson Nunes</strong></a>, tenho 21 anos, sou apaixonado por tecnologia e arte. Transformo ideias em realidade digital com habilidades em desenvolvimento de interfaces (sites e apps).</p>
    </div>
    </div>
     <div className="Info-a-direita">
     <img src={Ilustration} alt="o" />
     <div className="Contatos">
     <button>
     <i class="fa-brands fa-github"></i>
     </button>
     <button>
     <i class="fa-brands fa-linkedin-in"></i>
     </button>
     <button>
     <i class="fa-solid fa-envelope"></i>
     </button>
     <button>
     <i class="fa-brands fa-whatsapp"></i>
     </button>
     </div>
    </div>
    </div>
  );
}