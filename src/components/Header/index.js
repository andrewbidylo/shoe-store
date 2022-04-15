import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {AppContext} from '../../context'
import {useState, useContext} from 'react'

function Header (props){

  const {itemsForCard} = useContext(AppContext)
  const totalPrice = itemsForCard.reduce((sum, obj) => obj.price + sum, 0)

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
        <li className='mr-30 cu-p' onClick={()=>{props.onClickCart()}}>
          <img src='/img/cart.svg' alt='Cart' />
          <span>
            {totalPrice}
          </span>
        </li>
        <li>
        <Link to='/favorites'>
        <img className='mr-20 cu-p' src='/img/heart.svg' alt='Favorites' />
        </Link>
        </li>
        <li>
          <img className='cu-p' src='/img/user.svg' alt='User' />
        </li>
      </ul>
    </header>
  )
}

export default Header