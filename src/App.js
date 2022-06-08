import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';


export default class App extends Component {
  pageSize = 9;

  render() {
    return (

      <Router>
        <Navbar/>
        <div >
        <Routes>
          <Route exact path="/" element={ <NewsComponent key="general" pageSize={this.pageSize} category={"general"}/>} ></Route>
          <Route exact path="/business" element={ <NewsComponent key="business" pageSize={this.pageSize} category={"business"}/>} ></Route>
          <Route exact path="/entertainment" element={ <NewsComponent key="entertainment" pageSize={this.pageSize} category={"entertainment"}/>} ></Route>
          <Route exact path="/health" element={ <NewsComponent key="health" pageSize={this.pageSize} category={"health"}/>} ></Route>
          <Route exact path="/science" element={ <NewsComponent key="science" pageSize={this.pageSize} category={"science"}/>} ></Route>
          <Route exact path="/sports" element={ <NewsComponent key="sports" pageSize={this.pageSize} category={"sports"}/>} ></Route>
          <Route exact path="/technology" element={ <NewsComponent key="technology" pageSize={this.pageSize} category={"technology"}/>} ></Route>
        
        </Routes>
        </div>
        </Router>
        )
  }
}

