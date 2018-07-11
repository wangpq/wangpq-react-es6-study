import React, { Component } from 'react';
import ShoppingList from './ShoppingList';

class About extends Component {
  render() {
    return (  
      <div className="App">
        <h2>我是关于页面的内容</h2>
        <ShoppingList name="数组循环绑定示例"></ShoppingList>
      </div>
    );
  }
}

export default About;
