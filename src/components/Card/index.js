import styles from './Card.module.scss'
import React from 'react'


function Card({ title, price, imageURL, onClickFavorite, onClickAdd }) {

  const [isAdded, setIsAdded] = React.useState(false)

  // Pass {title, price, imageURL} from the selected item to the Card. 
  // Change the Cart's status.  
  const onClickPlus = () => {
    onClickAdd({ title, price, imageURL})
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card} >
      <div className={styles.favorite}>
        <img src='/img/unliked.svg' alt='unliked' onClick={onClickFavorite} />
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


