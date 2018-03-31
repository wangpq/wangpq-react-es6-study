import React, { Component } from 'react';
import '../css/shoplist.css';
import { Spin} from 'antd';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    //alert("constructor");
    this.state={
      isLoading : true,
      article : {}
    };
  }

  componentWillMount (){
    //alert("componentWillMount")

  }

  componentDidMount(){
    //alert("componentDidMount");

    fetch('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312').then((res)=>{
      if(res.ok){  
          res.text().then((respon)=>{
            this.setState({
              isLoading : false,
              article:  JSON.parse(respon).data
            });
          })
      }
    }).catch((res)=>{
      console.log(res.status);
    });
  }

  render() { 

    let article=this.state.article.title;
    if(this.state.isLoading){
      return (  <Spin></Spin>)
    }else{
      return (
        <div className="shopping-list">
          <br/>
          <h1>AJAX示例</h1>
          <div>{article}</div>
        </div>
      );
    }
  }
}

export default ShoppingList;
