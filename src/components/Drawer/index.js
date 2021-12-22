import styles from './Drawer.module.scss'

function Drawer () {
  return (
    <div style={{ display: 'none' }} className='overlay'>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>Cart
          <img className='remove-btn cu-p' src='/img/btn-remove.svg' alt='remove' />
        </h2>
        <div className={styles.items}>
          <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
              <p className='cart-discription'>Mens shoes New model 2022</p>
              <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
          </div>
          <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
              <p className='cart-discription'>Mens shoes New model 2022</p>
              <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
          </div>
          <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
              <p className='cart-discription'>Mens shoes New model 2022</p>
              <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
          </div>
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li>
              <span>Sum:</span>
              <div></div>
              <b>$300</b>
            </li>
            <li>
              <span>Tax:</span>
              <div></div>
              <b>$40</b>
            </li>
          </ul>
          <button className='greenButton'>
            Buy
            <img src='/img/arrow.svg' alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer