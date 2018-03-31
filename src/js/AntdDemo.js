import React, { Component } from 'react';
import { Carousel,Rate,DatePicker,Spin  } from 'antd';
import '../css/AntdDemo.css';

class PrdDetail extends Component {
  constructor(props) {
    super(props);
    //alert("constructor");
    this.state = {
        rateValue: 3
    };
  }

  handleToAbout = () => {
    window.location.href="/about";
  }


  handleRateChange = (rateValue) => {
    this.setState({ 
      rateValue : rateValue 
    });
  }

  componentDidMount (){
    this.setState({ 
      rateValue : Math.round(19/10)
    });
  }

  render() { 
    //alert("render")

    if(this.state.isLoading){
      return (  <Spin></Spin>)
    }else{
      return (  
        <div className="antd">
   
            <div>
              <a href="/">跳转到首页home超链接示例</a>
            </div>

            <button onClick={this.handleToAbout}>跳转AboutJS事件</button>
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