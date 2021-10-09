import React from 'react';

import './App.css';
import Header from "../header";
import Slider from "../main_slider";

const App = () => {
  return (
    <div className={'main'}>
      <Header />
      <Slider />
    </div>
  )
}

export default App;