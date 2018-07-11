import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
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
import Header from './js/Header'
import './css/app.css';

const BasicExample = () => (
    <Router>
      <div>
        <Header></Header>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/AntdDemo" component={AntdDemo}/>
      </div>
    </Router>
)

ReactDOM.render(<BasicExample/>, document.getElementById('root'));



//registerServiceWorker();