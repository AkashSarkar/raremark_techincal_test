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
      <MasterRoutes />
      <Footer />
    </Router>
  );
}

export default App;
