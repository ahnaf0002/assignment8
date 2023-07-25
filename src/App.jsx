import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Income from './pages/Income';
import Expenses from './pages/Expenses';
import Navigation from './components/Navigation'; 

const App = () => {
  return (
    <div>


      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Income' element={<Income></Income>}></Route>
        <Route path='Expenses' element={<Expenses></Expenses>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;