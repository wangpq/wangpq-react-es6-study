import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//import registerServiceWorker from './js/registerServiceWorker'

/*
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
*/

import Home from './js/Home'
import About from './js/About'
import AntdDemo from './js/AntdDemo'
import './css/app.css';

const BasicExample = () => (
    <Router>
      <div>
        <ul className="App-header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/AntdDemo">AntdDemo</Link></li>
        </ul>
  
        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/AntdDemo" component={AntdDemo}/>
      </div>
    </Router>
)

ReactDOM.render(<BasicExample/>, document.getElementById('root'));



//registerServiceWorker();