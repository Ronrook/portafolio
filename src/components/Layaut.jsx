
import Navbar from "./Navbar";
// import Footer from "./Footer";




function Layaut({children}) {

 
  return (
        <div>
            <Navbar />
            
            
            {children}
        </div>
  )
}

export default Layaut;