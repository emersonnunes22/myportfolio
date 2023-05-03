import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import PagesRoutes from './Pages';
import './Responsividade.css';
function App() {
  return (
     <>
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
    <PagesRoutes />
    </Router>
    </>
  );
}

export default App;
