import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
      <div className='App'>
          <Navbar/>
          <ItemListContainer greeting="Catálogo de productos de la empresa."/>
      </div>
    );
}

export default App;
