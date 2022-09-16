import Navbar from '../component/Navbar';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom';
import Home from './Home';
import Products from './Home';
import Reports from './Home';
import'./App.css';


function App(){
  return(
    <>
    <Router>
      <Navbar>
        <switch>
          <Route path='/' component={Home}/>
          <Route path='/products' component={Products}/>
          <Route path='/reports' component={Reports}/>
        </switch>
      </Navbar>
    </Router>
    </>
  )
}