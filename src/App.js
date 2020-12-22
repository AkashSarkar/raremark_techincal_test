import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './common/Navbar';
import { MasterRoutes } from './routes'
import Footer from './common/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginBottom: "30px" }} />
      <MasterRoutes />
      <div style={{ marginBottom: "100px" }} />
      <Footer />
    </Router>
  );
}

export default App;
