import styles from '../components/Drawer/Drawer.module.scss'
import { AppContext } from '../context'
import { useContext } from 'react'


const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext)
  return (
    <div className={styles.cartEmpty}>
      <img className='mb-20' src={image} alt='Empty cart' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button onClick={() => { setCartOpened(false) }} className={styles.greenButton}>
        <img src='/img/arrow.svg' alt='Arrow' />
        Back
      </button>
    </div>
  )
}

export default Info