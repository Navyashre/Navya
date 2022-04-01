
import './App.css';

import Navbar from "./nav"

// import SeriesList from './serieslist';
// import MoviesList from './moviesList';
import Footer from './footer';
// import './footer.css';
import Home from './Home';
import About from './about';
import Saved from './saved';
import Add from './add';
import PageNotFound from './404';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";


function App(){
  
  
    return (
     <Router>
        <div className='app'>
         
         <Navbar/> 
     
            <Switch>

                <Route exact path="/">
                <Home/>
                </Route>

                <Route exact path="/about">
                <About/>
                </Route>

                <Route exact path="/saved">
                <Saved/>
                </Route>

                <Route exact path="/add">
                <Add/>
                </Route>

                <Route exact path="*">
                <PageNotFound/>
                </Route>


             </Switch>

        <Footer/>
         
         </div>
     </Router>
     );
  }

export default App;

