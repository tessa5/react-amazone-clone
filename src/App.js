import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from './components/Header'
import Main from "./components/Main";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./components/Firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";



function App() {
//this is a listener 
  const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The User Is >>>', authUser);

        if (authUser) {
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        } else {
            dispatch({
              type: 'SET_USER',
              user: null
            })
        }
      })
    }, [])

  return (
    <Router>
    <div className="App">

      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/product'>
          <Header/>
          <Product/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
        </Route>
        <Route path='/payment'>
            <Header/>
            <Payment/>
        </Route>
        <Route path='/'>
          <Header/>
          <Main/>
          <Features/>
          <Footer/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
