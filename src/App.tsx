import React, { createContext, useEffect, useState } from 'react';
import Shop from './components/Shop/shop';
import Header from './components/Header/header';
import { Route, Routes } from "react-router-dom";
import './App.scss'
import DBStore from './dbStore/dbStore'
import { useSelector } from 'react-redux';
import { IShop } from './types/shopTypes';
import Products from './components/Products/products';
import { useDispatch } from 'react-redux';
import ShoppingCart from './components/ShoppingCart/shoppingCart';

export const Context = createContext<{ shops: IShop[] }>({ shops: [] });

function App() {

  const [shops, setShops] = useState([])

  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    DBStore.getShopes()
    .then(res => {
      setShops(res)
    })
  }, [])

  return (
    <div className="App">
      <Context.Provider value={{ shops }}>
        <Header />
        <div className="App__main">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/shopping-cart" Component={ShoppingCart} />
            <Route path="/shop" Component={Shop} />
            <Route path="/shop/:shopId" Component={Products} />
          </Routes>
        </div>
      </Context.Provider>
    </div>
  );
}

const Home = () => {
  return (
    <h1 style={{textAlign: 'center', marginTop: 50, fontWeight: 500}}>Ласкаво просимо!</h1>
  )
}

export default App;
