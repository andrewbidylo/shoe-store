import styles from './Card.module.scss'
import React from 'react'


function Card({ id, title, price, imageURL, onClickAdd, onClickFavorite, favorited = false}) {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  // Pass {title, price, imageURL} from the selected item to the Card. 
  // Change the Cart's status.  
  const onClickPlus = () => {
    onClickAdd({ id, title, price, imageURL})
    setIsAdded(!isAdded)
  }

  const onClickFavoriteButton = () => {
    onClickFavorite({ id, title, price, imageURL})
    setIsFavorite(!isFavorite)
  }


  return (
    <div className={styles.card} >
      <div className={styles.favorite}>
        <img src={isFavorite ? "./img/liked.svg" : '/img/unliked.svg'}  alt='unliked' onClick={onClickFavoriteButton} />
      </div>
      <img src={imageURL} alt='plus' className={styles.sneakersPic}></img>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>${price}</b>
        </div>
        <img onClick={onClickPlus}
          className={styles.addItem}
          src={isAdded ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
          alt='plus'/>
      </div>
    </div>
  )
}

export default Card


