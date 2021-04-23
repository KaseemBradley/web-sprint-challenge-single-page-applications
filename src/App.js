import React from "react";
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={OrderForm}/>
    </>
  );
};
export default App;
