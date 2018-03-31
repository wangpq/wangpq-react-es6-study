import React, { Component } from 'react';
import logo from '../temp/logo.svg';
import 'antd/dist/antd.css';
import '../css/home.css';
import {Tabs } from 'antd';
import PrdDetail from './PrdDetail';

class Home extends Component {

  render() {

    const TabPane = Tabs.TabPane;

    function callback(key) {
      //alert(key);
    }

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎学习React</h1>
        </header>

        <div className="antd">

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="商品详情" key="1">       
               <PrdDetail name="数组循环绑定示例"></PrdDetail>
            </TabPane>
            <TabPane tab="行程简介" key="2">行程简介行程简介</TabPane>
            <TabPane tab="购买须知" key="3">购买须知购买须知</TabPane>
            <TabPane tab="用户好评" key="4">用户好评用户好评</TabPane>
          </Tabs>

        </div>
      </div>
    );
  }
}

export default Home;
