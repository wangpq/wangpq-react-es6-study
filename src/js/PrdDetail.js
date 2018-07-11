import React, { Component } from 'react';
import { Spin} from 'antd';

class PrdDetail extends Component {
  constructor(props) {
    super(props);
    //alert("constructor");
    this.state={
      name : "",
      isLoading : true,
      topics : []
    };
  }

  componentWillMount (){
  }

  componentDidMount(){
    fetch('https://cnodejs.org/api/v1/user/alsotang').then((res)=>{ 
      if(res.ok){  
          res.text().then((respon)=>{  
            var data=JSON.parse(respon).data;
            this.setState({
                isLoading  : false,
                name : data.loginname,
                topics: data.recent_topics
              });
          })
      }
    }).catch((res)=>{
      console.log(res.status);
    });
  }

  render() { 
    //alert("render")

    let topics =this.state.topics;
   
    if(this.state.isLoading){
      return (  <Spin></Spin>)
    }else{
      return (  
        <div className="topics-list">
          <ul>
            {
              topics.map(function (item) {
                  return <li className="item" key={item.title}>{item.title}</li>
              })
            }
          </ul>
  
          <br/>
  
        </div>
      );
    }

  }
}

export default PrdDetail;
