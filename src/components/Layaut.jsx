
import Navbar from "./Navbar";
// import Footer from "./Footer";




function Layaut({children}) {

 
  return (
        <div className="">
            <Navbar />
            
            
            {children}
        </div>
  )
}

export default Layaut;