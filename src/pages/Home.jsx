import Card from '../components/Card';
import { useState } from 'react'


const Home = ({ items, onAddtoCart, onAddToFavorite, isLoading }) => {

  const [searchValue, setSearchValue] = useState('')

  const renderItems = () => {

    const currentItems = isLoading ? [...Array(10)] : items
    const renderItems = []

    for (let i = 0; i < currentItems.length; i++) {
      if (currentItems[i]?.title.toLowerCase().includes(searchValue.toLowerCase()) || currentItems.length === 10)
        renderItems.push(
          <Card
            key={i}
            {...currentItems[i]}
            onClickAdd={obj => { onAddtoCart(obj) }}
            onClickFavorite={obj => { onAddToFavorite(obj) }}
            loading={isLoading}
          />
        )
    }
    return renderItems
  }

  return (
    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchValue ? `Search: ${searchValue}` : 'All Shoes'}</h1>
        <div className='search-block d-flex'>
          <img src='/img/search.svg' alt='Search' />
          {searchValue ? <img onClick={() => setSearchValue('')} className='clear remove-btn cu-p' src='/img/btn-remove.svg' alt='Clear' /> : null}
          <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder='Search'></input>
        </div>
      </div>
      <div className='d-flex flex-wrap' data-testid="items">
        {renderItems()}
      </div>
    </section>
  )
}


export default Home