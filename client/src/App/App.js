//@flow
import React, { Component } from 'react';
import axios from 'axios';
import logo from './../logo.svg';
import './App.css';

import Header from './../Header/Header';
import MainContainer from '../MainContainer/MainContainer'

type Props = {};
type State = {};

class App extends Component<Props, State> {

  // async componentDidMount() {
  //   const res = await axios.get('/favorites/?format=json')
  //   console.log(res.data)
  // }
  
  render() {
    return (
      <div className="App">
        <Header />
        {/* <MainContainer /> */}
      </div>
    );
  }
}

export default App;
