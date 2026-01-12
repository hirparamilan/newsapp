import './App.css';

import { Component } from 'react'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter, Route, Routes } from "react-router-dom";
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <NavBar />
        {/* <Alert alert={alert} /> */}
        {/* <div> */}
          <Routes>
            <Route index path="/" element={<News />} />
            {/* <Route path="/about" element={<About darkMode={darkMode} />} /> */}
          </Routes>
        {/* </div> */}
      </HashRouter>
    )
  }
}
