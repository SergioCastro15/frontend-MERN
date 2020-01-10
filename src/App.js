import React from 'react';
import Home from './views/Home';
import AddMovie from './views/AddMovie';
import { Router } from "@reach/router"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Home path="/" />
      <AddMovie path="add-movie" />
    </Router>
  );
}

export default App;
