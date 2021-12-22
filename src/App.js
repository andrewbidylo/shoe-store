import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react'

const DB = [
  {title: 'Mens shoes', price: 454, imageURL: './img/sneakers/1.png'},
  {title: 'Mens shoes2', price: 424, imageURL: './img/sneakers/1.png'},
  {title: 'Mens shoes3', price: 124, imageURL: './img/sneakers/1.png'},
  {title: 'Mens shoes4', price: 554, imageURL: './img/sneakers/1.png'},
]


function App() {

  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onCloseDrawer={()=>{setCartOpened(false)}}/> : null}
      <Header onClickCart={()=>{setCartOpened(true)}}/>
      <section className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>All Sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search'></input>
          </div>
        </div>
        <div className='allSneackers d-flex justify-between'>
        {DB.map((shoe) => (
          <Card 
          title= {shoe.title}
          price= {shoe.price}
          imageURL = {shoe.imageURL}
          onClickAdd = {()=>{console.log('clicked add')}}
          onClickFavorite = {()=>{console.log('clicked favorite')}}
          />
        ))}


        </div>
      </section>
    </div>
  );
}

export default App;
