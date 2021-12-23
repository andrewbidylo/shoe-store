import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react'
import axios from 'axios';



function App() {
  
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [itemsForCard, setCartItem] = React.useState([])
  const [searchValue, serSearchValue] = React.useState('')

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
  }, [])

  // Remove item from the Card. From the DB and DOM.
  const onRemoveItem = (id) => {
    axios.delete(`https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/${id}`)
        setCartItem(prev => prev.filter(item => item.id !== id));

  }

  // Add selected item to the DB and to the local state.
  const onAddtoCart = (obj) => {
    axios.post('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart', obj)
    setCartItem(prev => [...prev, obj])
  }


  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onRemoveItem={onRemoveItem} itemsForCard={itemsForCard} onCloseDrawer={() => { setCartOpened(false) }} /> : null}
      <Header onClickCart={() => { setCartOpened(true) }} />
      <section className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Search: ${searchValue}` : 'All Shoes'}</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            {searchValue ? <img onClick={() => serSearchValue('')} className='clear remove-btn cu-p' src='/img/btn-remove.svg' alt='Clear' /> : null}
            <input onChange={(event) => serSearchValue(event.target.value)} value={searchValue} placeholder='Search'></input>
          </div>
        </div>
        <div className='allSneackers d-flex justify-between flex-wrap '>
          {items
            .filter((item) => item.title
              .toLowerCase()
              .includes(searchValue
                .toLowerCase()))
            .map((shoe, index) => (
              <Card
                key={index}
                title={shoe.title}
                price={shoe.price}
                imageURL={shoe.imageURL}
                onClickAdd={obj => { onAddtoCart(obj) }}
                onClickFavorite={() => { console.log('clicked favorite') }}
              />
            ))}


        </div>
      </section>
    </div>
  );
}

export default App;
