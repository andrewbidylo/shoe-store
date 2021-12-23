import styles from './Drawer.module.scss'

function Drawer({ itemsForCard = [], onCloseDrawer, onRemoveItem }) {
  return (
    <div className='overlay'>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>Card
          <img className='remove-btn cu-p' src='/img/btn-remove.svg' alt='Close' onClick={onCloseDrawer} />
        </h2>
        {itemsForCard.length > 0 ?   
        <div className = 'wrapper'> 
        {itemsForCard.map((item) => (
          <div className={styles.items}>
            <div className={styles.cartItem}>
              <img src={item.imageURL} alt='plus' className={styles.sneakersPic} />
              <div className='m-10'>
                <p className='cartDiscription'>{item.title}</p>
                <b>${item.price}</b>
              </div>
              <img onClick={() => onRemoveItem(item.id)} className='remove-btn' src='/img/btn-remove.svg' alt='remove' />
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
        : 
        <div className={styles.cartEmpty}>
          <img className='mb-20' src="/img/empty-cart.jpg" alt='Empty cart' />
          <p className='opacity-6'>Card is empty</p>
          <button className={styles.greenButton}> 
            <img src='/img/arrow.svg' alt='Arrow' />
            Back
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Drawer