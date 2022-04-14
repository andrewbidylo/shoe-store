import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import { AppContext } from './context';

const App = () => {

  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [itemsForCard, setCartItem] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Get items from server (first render) and hendeling errors.
  // Set get data to state.

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
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
  const onRemoveItem = (id) => {
    axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/${id}`)
    setCartItem(prev => prev.filter(item => item.id !== id))
  }

  // Add selected item to the DB and to the local state.
  const onAddtoCart = (obj) => {
    try {
      if (itemsForCard.find((item => Number(item.id) === Number(obj.id)))) {
        axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/${obj.id}`)
        setCartItem(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart', obj)
        setCartItem(prev => [...prev, obj])
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
  return itemsForCard.some(obj => Number(obj.id) === Number(id))
}
  return (
    <AppContext.Provider value={{items, itemsForCard, favorites, isItemAdded}}>
    <div className="wrapper clear">
      {cartOpened ? <Drawer onRemoveItem={onRemoveItem} itemsForCard={itemsForCard} onCloseDrawer={() => { setCartOpened(false) }} /> : null}
      <Header onClickCart={() => { setCartOpened(true) }} />
      <Routes>
        <Route path="/" exact element={
          <Home
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            items={items} onAddtoCart={onAddtoCart}
            itemsForCard={itemsForCard}
            isLoading = {isLoading}
            onAddToFavorite={onAddToFavorite}
          />}
        />
        <Route path="/favorites" exact element={<Favorites/>} />

      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
