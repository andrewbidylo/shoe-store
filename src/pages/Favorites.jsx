import { useContext } from 'react';
import Card from '../components/Card';
import { AppContext } from '../context'


const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext)

  return (
    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Favorites</h1>
      </div>
      <div className='d-flex flex-wrap '>
        {favorites.map((shoe, index) => (
          <Card
            id={shoe.perentId}
            key={index}
            title={shoe.title}
            price={shoe.price}
            imageURL={shoe.imageURL}
            favorited={true}
            onClickFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default Favorites