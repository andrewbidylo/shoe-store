import styles from './Drawer.module.scss'
import Info from "../Info"
import { useState } from 'react'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseDrawer, onRemoveItem }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { itemsForCart, setCartItem, totalPrice } = useCart()

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post('https://61c3afad9cfb8f0017a3ec85.mockapi.io/orders', { items: itemsForCart })

      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItem([])

      for (let i = 0; i < itemsForCart.length; i++) {
        const item = itemsForCart[i];
        await axios.delete('https://61c3afad9cfb8f0017a3ec85.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Order did not create')
    }

  }
  return (
    <div className='overlay'>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>Cart
          <img className={styles.removeBtn} src='/img/btn-remove.svg' alt='Close' onClick={onCloseDrawer} />
        </h2>

        {itemsForCart.length > 0 ? (
          <div className='d-flex flex-column flex"'>
            <div className={styles.items}>
              {itemsForCart.map(item => (
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
                  <span>Price:</span>
                  <div></div>
                  <b>${totalPrice}</b>
                </li>
                <li>
                  <span>Total price (with tax):</span>
                  <div></div>
                  <b>${totalPrice / 100 * 14 + totalPrice}</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className={styles.greenButton}>
                Buy
                <img src='/img/arrow.svg' alt='arrow' />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Order is completed!' : 'Cart is empty'}
            description={
              isOrderComplete
                ? `Your order ${orderId} is going to be sent soon`
                : 'Please add at least one item to the cart'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  )
}

export default Drawer