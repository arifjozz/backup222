import React, { Component } from 'react';
import './App.css';
import {  Route } from 'react-router-dom'
import Berita from './Containers/Berita/Berita';
import { Switch } from 'react-router-dom'
import SubBerita from './Containers/SubBerita/SubBerita'
import Header from './Components/Header/Header';
import Teknologi from './Containers/Teknologi/Teknologi';
// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path ="/" component={Header} />
         <Route path="/" exact={true} component={Berita} />
      </Switch>

                
        <Switch>
         
          <Route path="/SubBerita" component={SubBerita} />
          <Route path="/Teknologi" component={Teknologi} />

  <Berita />
        </Switch>
      
      </div>
    );
  }
}

export default App;

/* 
class Berita extends Component {
  render(){
    return(
      
    )
  }
}

class BeritaDetail extends Component {
  render(){
    return(
      <div dangerouslySetInnerHTML={{ __html: this.props.data.content }}>

      </div>
    )
  }
} */
{
  /* <div
    style={{
      marginBottom: "56px",
      padding: "16px"
    }}>
    
    
    {this.state.isLoading && <h1 align="center">Loading ...</h1>}
    {!this.state.isLoading && !this.state.isDetailMode && this.state.data.posts.map((post)=>{
      
      return(
        <Berita 
          title={post.title}
          image={post.featured_image.source}
          handleClick={()=>{this.handleDetailClick(post)}}
        />
      )
    })}
    
    {this.state.isDetailMode &&
        <BeritaDetail
        data={this.state.dataDetail}
        />
      }
      
  </div>
  
   */
}
/* state = {
                  value: 0,
                  isLoading: true,
                  data: {},
                  isDetailMode: false,
                  dataDetail: {}
                };
                
                handleChange = (event, value) => {
                  this.setState({ value });
                };
                
                handleDetailClick = (post) => {
                  this.setState({
                    isDetailMode: true,
                    dataDetail: post
                  })
                }
                
                 */
