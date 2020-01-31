
import React, { Component } from 'react';
import TopHeader from './components/Navbar';
import SecondHeader from './components/Header';
import SearchBooks from './components/SearchBooks';
import Grid from './components/Container'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div>
      <TopHeader />
      <Grid />
    </div>

  )
}

export default App;
