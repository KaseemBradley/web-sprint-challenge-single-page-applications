import React from "react";
import Home from './components/Home';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path='/' component={Home} />
    </>
  );
};
export default App;
