import Card from '../components/Card'
import {useState, useEffect} from 'react'
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    (async ()=>{
      const {data} = axios.get('https://61c3afad9cfb8f0017a3ec85.mockapi.io/orders')
    })()

  },[])
  return (

    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
      <h1>My orders</h1>
      </div>
      <div className='allSneackers d-flex justify-between flex-wrap '>
       {[].map((shoe, index) => (
            <Card
            />
          ))}
      </div>
    </section>
  )
}

export default Orders