import styles from './Header.module.scss'

function Header (props){
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className={styles.logo} src='img/logo.png' alt='logo-sneakers' />
        <div className={styles.headerInfo}>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p className='opacity-5'>Sneakers store</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className='mr-30 cu-p' onClick={()=>{props.onClickCart()}}>
          <img src='/img/cart.svg' alt='' />
          <span>
            $100
          </span>
        </li>
        <li>
          <img src='/img/user.svg' alt='' />
        </li>
      </ul>
    </header>
  )
}

export default Header