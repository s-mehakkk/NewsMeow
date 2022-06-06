import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='container'>
      <NewsComponent/>
      </div>
      </>
    )
  }
}

