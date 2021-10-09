import React from 'react';

import './App.css';
import Header from "../header";
import Slider from "../main_slider";
import TopGoods from "../top-goods";

const App = () => {
  return (
    <div className={'main'}>
      <Header />
      <Slider />
      <TopGoods />
    </div>
  )
}

export default App;