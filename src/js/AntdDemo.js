import React, { Component } from 'react';
import { Carousel,Rate,DatePicker,Spin  } from 'antd';

import {Link,Redirect } from 'react-router-dom';


import '../css/AntdDemo.css';

class PrdDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoading : true,
        rateValue: 3
    };
  }

  handleToAbout = () => {
    //window.location.href="/about";
    
    this.setState({redirect: true});

  }


  handleRateChange = (rateValue) => {
    this.setState({ 
      rateValue : rateValue 
    });
  }

  componentDidMount (){
    this.setState({ 
      isLoading : false,
      rateValue : Math.round(19/10)
    });
  }

  render() { 

    if (this.state.redirect) {
      return <Redirect push to="/about" />; 
    }
  
    if(this.state.isLoading){
      return (  <Spin></Spin>)
    }else{
      return (  
        <div className="antd">
   
            <div>
              <Link to="/">跳转到首页home超链接示例</Link> 
            </div>

            <button onClick={this.handleToAbout}>点击我跳转关于事件</button>
            <br/><br/>

            <Carousel autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>

            <br/><br/>
            <DatePicker/>

            <br/><br/>
            <span>
              <Rate onChange={this.handleRateChange} value={this.state.rateValue} />
              {this.state.rateValue && <span className="ant-rate-text">{this.state.rateValue} stars</span>}
            </span>
        </div>
      );
    }

  }
}

export default PrdDetail;
