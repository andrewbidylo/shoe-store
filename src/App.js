import Header from './components/Header';
import Drawer from './components/Drawer';
import Orders from './pages/Orders';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { AppContext } from './context';

const App = () => {

  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [itemsForCart, setCartItem] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Get items from server (first render) and hendeling errors.
  // Set get data to state.

  useEffect(() => {
    async function fetchData() {
     
      const cartResp = await axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart')
      const favItemsResp = await axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/favoriteItems')
      const itemsResp = await axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/items')
     
      setIsLoading(false)

      setCartItem(cartResp.data)
      setFavorites(favItemsResp.data)
      setItems(itemsResp.data)

    }
    fetchData()
  }, [])

  // Remove item from the Card. From the DB and DOM.
  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/${id}`)
      setCartItem(prev => prev.filter(item => item.id !== id))
    } catch (error) {
      alert('Some error!')
    }
  }

  // Add selected item to the DB and to the local state.
  const onAddtoCart = async (obj) => {
    try {
      if (itemsForCart.find((item => Number(item.id) === Number(obj.id)))) {
        setCartItem(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        await axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/${obj.id}`)
      } else {
        setCartItem(prev => [...prev, obj])
        await axios.post('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart', obj)
      }
    } catch (error) {
      alert('Some error!')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((item => item.id === obj.id))) {
        axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/favoriteItems/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://61c3afad9cfb8f0017a3ec85.mockapi.io/favoriteItems', obj)
        setFavorites(prev => [...prev, data])

      }
    } catch (error) {
      alert('Some error!')
    }
  }
  const isItemAdded = (id) => {
    return itemsForCart.some(obj => Number(obj.id) === Number(id))
  }
  return (
    <AppContext.Provider value={{ items, itemsForCart, onAddtoCart, onAddToFavorite, favorites, isItemAdded, setCartOpened, setCartItem }}>
      <div className="wrapper clear">
        {cartOpened ? <Drawer onRemoveItem={onRemoveItem} itemsForCart={itemsForCart} onCloseDrawer={() => { setCartOpened(false) }} /> : null}
        <Header onClickCart={() => { setCartOpened(true) }} />
        <Routes>
          <Route path="/" exact element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              items={items} onAddtoCart={onAddtoCart}
              itemsForCart={itemsForCart}
              isLoading={isLoading}
              onAddToFavorite={onAddToFavorite}
            />}
          />
          <Route path="/favorites" exact element={<Favorites />} />
          <Route path="/orders" exact element={<Orders />} />

        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;