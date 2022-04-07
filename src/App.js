
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites';


function App() {

  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [itemsForCard, setCartItem] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])


  // Get items from server (first render) and hendeling errors.
  // Set get data to state.

  React.useEffect(() => {
    axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart')
      .then((res) => {
        setCartItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/favoriteItems')
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // Remove item from the Card. From the DB and DOM.
  const onRemoveItem = (id) => {
    console.log("itemsForCard", itemsForCard)
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
        console.log(obj)
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
  console.log("items", items)
  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onRemoveItem={onRemoveItem} itemsForCard={itemsForCard} onCloseDrawer={() => { setCartOpened(false) }} /> : null}
      <Header onClickCart={() => { setCartOpened(true) }} />
      <Routes>
        <Route path="/" exact element={
          <Home
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            items={items} onAddtoCart={onAddtoCart}
            onAddToFavorite={onAddToFavorite}
          />}
        />
        <Route path="/favorites" exact element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />

      </Routes>
    </div>
  );
}

export default App;
