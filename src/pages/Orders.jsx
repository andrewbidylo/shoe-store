import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false)
      } catch (error) {
        alert("Error")
      }
    })()

  }, [])

  return (
    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>My orders</h1>
      </div>
      <div className='d-flex flex-wrap '>
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            {...item}
            loading={isLoading}
          />
        ))}
      </div>
    </section>
  )
}

export default Orders