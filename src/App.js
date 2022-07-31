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
//           <Route exact path="/" element={ <News key="general" setProgress={setProgress} pageSize={pageSize category={"general"}/>} ></Route>
//           <Route exact path="/business" element={ <News key="business" setProgress={setProgress} pageSize={pageSize category={"business"}/>} ></Route>
//           <Route exact path="/entertainment" element={ <News key="entertainment" setProgress={setProgress} pageSize={pageSize category={"entertainment"}/>} ></Route>
//           <Route exact path="/health" element={ <News key="health" setProgress={setProgress} pageSize={pageSize category={"health"}/>} ></Route>
//           <Route exact path="/science" element={ <News key="science" setProgress={setProgress} pageSize={pageSize category={"science"}/>} ></Route>
//           <Route exact path="/sports" element={ <News key="sports" setProgress={setProgress} pageSize={pageSize category={"sports"}/>} ></Route>
//           <Route exact path="/technology" element={ <News key="technology" setProgress={setProgress} pageSize={pageSize category={"technology"}/>} ></Route>

//         </Routes>
//         </div>
//         </Router>
//         )
//   }
// }

import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
//import News from "./components/News";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App= ()=> {
  const pageSize = 6;
  const apiKey = '90bd313746614e5ab3e4e719901420cb';

  const [progress, setProgress] = useState(0)
  const [query, setQuery] = useState("")

    return (
      <div className="p-4">
        <Router>
          <LoadingBar
            color='#f11946'
            height={2}
            progress={progress}
          />
          <Navbar setQuery={setQuery}/>
          <Routes>
            <Route exact path="/" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="general" country="country=in" category="general" />} />
            <Route exact path="/business" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="business" country="country=in" category="business" />} />
            <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="entertainment" country="country=in" category="entertainment" />} />
            <Route exact path="/" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="general" country="country=in" category="general" />} />
            <Route exact path="/health" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="health" country="country=in" category="health" />} />
            <Route exact path="/science" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="science" country="country=in" category="science" />} />
            <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="sports" country="country=in" category="sports" />} />
            <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key="technology" country="country=in" category="technology" />} />
            <Route exact path="/query" element={<NewsComponent setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} key={query} country="country=in" query={query} />} />
            {/* check url-- `https://newsapi.org/v2/top-headlines?country=&apiKey=27d30c75a2ca42f3a20964c3b8348172&category=&pageSize=6&page=1&q= */}
            {/* '90bd313746614e5ab3e4e719901420cb' 
            27d30c75a2ca42f3a20964c3b8348172*/}
          </Routes>
        </Router>

      </div>
    );
}
export default App;