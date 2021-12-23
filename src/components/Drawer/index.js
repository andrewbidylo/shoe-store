import styles from './Drawer.module.scss'

function Drawer ({itemsForCard = [], onCloseDrawer}) {
  return (
    <div className='overlay'>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>Cart
          <img className='remove-btn cu-p' src='/img/btn-remove.svg' alt='remove' onClick={onCloseDrawer}/>
        </h2>
        {itemsForCard.map((item) => (
          <div className={styles.items}>
          <div className={styles.cartItem}>
            <img src={item.imageURL} alt='plus' className={styles.sneakersPic} />
            <div className='m-10'>
              <p className='cartDiscription'>{item.title}</p>
              <b>${item.price}</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
          </div>
        </div>
        ))}

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