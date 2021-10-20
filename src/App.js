import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './css/style.css'
import Context from './Components/Context'
import  {  BrowserRouter } from 'react-router-dom'

function App() {

   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
 
  return (
    <BrowserRouter >

    <Context.Provider value = {{cart, setCart}}>
      <div className="App">
          <Header />
          <Main />
          <Footer />
      </div>
      </Context.Provider>
      </BrowserRouter>
  );
}

export default App;
