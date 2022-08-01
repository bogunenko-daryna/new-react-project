import React from 'react';

import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
