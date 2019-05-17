import React from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
}

export default App;
