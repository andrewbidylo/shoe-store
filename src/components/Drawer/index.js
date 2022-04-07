import styles from './Drawer.module.scss'

function Drawer({ itemsForCard = [], onCloseDrawer, onRemoveItem }) {
console.log(itemsForCard)
  return (
    <div className='overlay'>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>Card
          <img className={styles.removeBtn} src='/img/btn-remove.svg' alt='Close' onClick={onCloseDrawer} />
        </h2>

        {itemsForCard.length > 0 ? (
          <div className='d-flex flex-column flex"'>
            <div className={styles.items}>

              {itemsForCard.map(item => ( 
              
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.imageURL} alt='plus' className={styles.sneakersPic} />

                  <div className='ml-20 mr-20 flex'>
                    <p className={styles.cartDiscription}>{item.title}</p>
                    <b>${item.price}</b>
                  </div>

                  <img
                    onClick={() => onRemoveItem(item.id)}
                    className={styles.removeBtn} src='/img/btn-remove.svg'
                    alt='remove'
                  />

                </div>

              ))}

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
              <button className={styles.greenButton}>
                Buy
                <img src='/img/arrow.svg' alt='arrow' />
              </button>
            </div>
          </div>

        ) : (

          <div className={styles.cartEmpty}>
            <img className='mb-20' src="/img/empty-cart.jpg" alt='Empty cart' />
            <p className='opacity-6'>Card is empty</p>
            <button onClick={onCloseDrawer} className={styles.greenButton}>
              <img src='/img/arrow.svg' alt='Arrow' />
              Back
            </button>
          </div>

        )}
      </div>
    </div>
  )
}

export default Drawer