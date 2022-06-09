// import './App.css';
// import Navbar from './components/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import React, { Component } from 'react'
// import News from './components/News';


// export default class App extends Component {
//   pageSize = 2;

//   render() {
//     return (

//       <Router>
//         <Navbar/>
//         <div >
//         <Routes>
//           <Route exact path="/" element={ <News key="general" setProgress={this.setProgress} pageSize={this.pageSize category={"general"}/>} ></Route>
//           <Route exact path="/business" element={ <News key="business" setProgress={this.setProgress} pageSize={this.pageSize category={"business"}/>} ></Route>
//           <Route exact path="/entertainment" element={ <News key="entertainment" setProgress={this.setProgress} pageSize={this.pageSize category={"entertainment"}/>} ></Route>
//           <Route exact path="/health" element={ <News key="health" setProgress={this.setProgress} pageSize={this.pageSize category={"health"}/>} ></Route>
//           <Route exact path="/science" element={ <News key="science" setProgress={this.setProgress} pageSize={this.pageSize category={"science"}/>} ></Route>
//           <Route exact path="/sports" element={ <News key="sports" setProgress={this.setProgress} pageSize={this.pageSize category={"sports"}/>} ></Route>
//           <Route exact path="/technology" element={ <News key="technology" setProgress={this.setProgress} pageSize={this.pageSize category={"technology"}/>} ></Route>

//         </Routes>
//         </div>
//         </Router>
//         )
//   }
// }

import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
//import News from "./components/News";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state= {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div className="p-4">
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category="general" />} />
            <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="technology" country="in" category="technology" />} />

          </Routes>
        </BrowserRouter>

      </div>
    );
  }
}