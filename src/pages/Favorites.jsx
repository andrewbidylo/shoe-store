import Card from '../components/Card';


const Favorites = ({items, onAddToFavorite}) => {
  return (

    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
      <h1>Favorites</h1>
      </div>
      <div className='allSneackers d-flex justify-between flex-wrap '>
       {items.map((shoe, index) => (
            <Card
             id={shoe.id}
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