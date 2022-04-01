import './App.css'
import home from './images/home.png'
import contact from './images/phone.png'
import saved from './images/saved.jpg'
import add from './images/saved.jpg'

import { Link } from 'react-router-dom'

const Navbar  = () => {
    return (
         <div className="nav " >
             <div  className="logo" >
             <h2 >SeriesPortal</h2>
             </div>
             <div className="navlinks">
                 <ul>
                     <li><Link to="/"><img src={home} alt="" width={50} height={50} /></Link> </li>
                     <li><Link to="/about"><img src={contact} alt="" width={50} height={50}/></Link></li>
                     <li><Link to="/saved"><img src={saved} alt="" width={50} height={50}/></Link></li>
                     <li><Link to="/saved"><img src={add} alt="" width={50} height={50}/></Link></li>
                     

                 </ul>
             </div>
              
         </div> );
}
 

export default Navbar;