import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import { useCart } from '../../hooks/useCart'
import React from 'react'

interface HeaderProps {
  onClickCart: () => void
}

const Header:React.FC<HeaderProps> = ({onClickCart}) => {

  const { totalPrice } = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to='/'>
        <div className="d-flex align-center">
          <img className={styles.logo} src='img/logo.png' alt='logo-sneakers' />
          <div className={styles.headerInfo}>
            <h3 className='text-uppercase'>Runner</h3>
            <p className='opacity-5'>Shoe store</p>
          </div>
        </div>
      </Link>
      <ul className='d-flex'>
        <li className='mr-30 cu-p' onClick={() => { onClickCart() }}>
          <img src='/img/cart.svg' alt='Cart' />
          <span>
            ${totalPrice}
          </span>
        </li>
        <li>
          <Link to='/favorites'>
            <img className='mr-20 cu-p' src='/img/heart.svg' alt='Favorites' />
          </Link>
        </li>
        <li>
          <Link to='/orders'>
            <img className='cu-p' src='/img/user.svg' alt='User' />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header