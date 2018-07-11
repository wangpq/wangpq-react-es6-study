import React, { Component } from 'react';
import logo from '../temp/logo.svg';
import '../css/header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
          <div className="item">
            <img src={logo} className="App-logo" alt="logo" /><span className="logo-txt">React</span>
          </div>
          <div className="item">
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/about">关于</Link></li>
              <li><Link to="/AntdDemo">Antd</Link></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Header;
