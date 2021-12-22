import styles from './Card.module.scss'

function Card () {
  return (
    <div className={styles.card} >
      <div className={styles.favorite}>
        <img src='/img/unliked.svg' alt='unliked' />
      </div>
      <img src='../img/sneakers/1.png' alt='plus' className={styles.sneakersPic}></img>
      <h5>Mens shoes</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>$350</b>
        </div>
        <button className={styles.button}>
          <img src='/img/plus.svg' alt='plus'></img>
        </button>
      </div>
    </div>
  )
}

export default Card


