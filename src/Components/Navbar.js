import { useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import './Navbar.css';
export default function Navbar() {

  let location = useLocation();
const [ activeLink, setActiveLink ] = useState(location.pathname);
const guias = (link) => {
  offAnimacaoMenu();
  setActiveLink(link);
}

function offAnimacaoMenu () {
 
  const menuMobile = document.querySelector('.Guias');
  menuMobile.classList.remove("on");
  /*  if (window.screen.width > 600) {
  
    }*/
}
function onAnimacaoMenu () {
   const menuMobile = document.querySelector('.Guias');
   menuMobile.classList.add("on");
   /* if (window.screen.width > 600) {
      animate(".Guias", {
     x: '0%'
    })
    }*/
}
  return (
    <nav className="Navbar">
    <h1 className="Logo">EMERSON NUNES</h1>
    <ul className="Guias"
    >
    <i id="OffMenuMobileButton" className="fa-solid fa-xmark"
    onClick={offAnimacaoMenu}
    >
    </i>
    <li>
    <Link to="/" className=
    { activeLink === "/" ? "selected" : ""}
    onClick={() => guias("/")}
    >Home</Link>
    </li>
    <li>
    <Link to="/projetos" className=
    { activeLink === "/projetos" ? "selected" : ""}
    onClick={() => guias("/projetos")}
    >Projetos</Link>
    </li>
    <li>
    <Link to="/habilidades" className=
    { activeLink === "/habilidades" ? "selected" : ""}
    onClick={() => guias("/habilidades")}
    >Skills</Link>
    </li>
    </ul>
    <div className="OnMenuMobileButton" onClick={onAnimacaoMenu}>
     <div></div>
     <div></div>
    </div>
    </nav>
  );
}