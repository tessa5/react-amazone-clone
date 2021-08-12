import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from './components/Header'
import Main from "./components/Main";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Features/>
      <Footer/>
      <Product/>
    </div>
  );
}

export default App;
