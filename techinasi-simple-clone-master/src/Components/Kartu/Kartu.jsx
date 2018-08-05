import React, { Component } from 'react';
//import Axiliary from '../../hoc/Auxiliary';
import logo from '../../logo.svg';
import '../../App.css';
import '../../App.scss'
import axios from 'axios';
import KartuSingular from '../../Components/Kartu/KartuSingular/KartuSingular';
class Kartu extends Component {
  state = {
    data: [],
    Loader: false
  };

  componentDidMount() {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          Loader: true
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.Loader ? (
          <KartuSingular data={this.state.data} />
        ) : (
          <div className="frame">
          <div className="center">
             <div className="dot-1"></div>
             <div className="dot-2"></div>
             <div className="dot-3"></div>
          </div>
       </div>
        )}
      </div>
    );
  }
}

export default Kartu;
