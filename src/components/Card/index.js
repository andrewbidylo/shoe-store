import styles from './Card.module.scss'
import React, { useState } from 'react'
import ContentLoader from 'react-content-loader';
// import AppContext from '../../context';
const Card = ({
  id,
  title,
  price,
  imageURL,
  onClickAdd,
  onClickFavorite,
  favorited = false,
  added = false,
  loading
}) => {

  const [isAdded, setIsAdded] = useState(added)
  const [isFavorite, setIsFavorite] = useState(favorited)
  // const { isItemAdded } = React.useContext(AppContext);
  // Pass {title, price, imageURL} from the selected item to the Card. 
  // Change the Cart's status.  
  const onClickPlus = () => {
    onClickAdd({ id, title, price, imageURL })
    setIsAdded(!isAdded)
  }

  const onClickFavoriteButton = () => {
    onClickFavorite({ id, title, price, imageURL })
    setIsFavorite(!isFavorite)
  }

console.log("isLoading",loading)
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={180}
          height={300}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="200" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="200" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onClickFavorite && (
            <div className={styles.favorite} onClick={onClickFavoriteButton}>
              <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" />
            </div>
          )}
          <img width="100%" height={180} src={imageURL} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>${price}</b>
            </div>
            {onClickAdd && (
              <img onClick={onClickPlus}
                className={styles.addItem}
                src={isAdded ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
                alt='plus' />

              // src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}

            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card