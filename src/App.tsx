import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/styles/Main.scss';
import Signin from './pages/Signin';
import * as routes from './constants/routes';
import PractitionerList from './pages/PractitionerList';
import PractitionerProfile from './pages/PractitionerProfile';

function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}/>
          <Route path={routes.LOGIN} element={<Signin />}/>
          <Route path={routes.LIST} element={<PractitionerList />}/>
          <Route path={routes.PROFILE} element={<PractitionerProfile />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
