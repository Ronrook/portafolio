import Layaut from './components/Layaut';
import Home from "./pages/Home"
import Portafolio from "./pages/Portafolio"
import Contac from "./pages/Contact"
import About from "./pages/About"
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portafolio" element={<Portafolio/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contac/>}/>
            </Routes>
            
        </div>
    
    )
}

export default App;
