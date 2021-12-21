function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className= 'logo' src='img/logo.png' alt='logo-sneakers'/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Sneakers store</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img src='/img/cart.svg' alt=''/>
            <span>
              $100
            </span>
          </li>
          <li>
          <img src='/img/user.svg' alt=''/>
          </li>
        </ul>
      </header>
      <section className='content p-40'>
        <h1 className='mb-40'>All Sneakers</h1>
        <div className='allSneackers d-flex justify-between'>
        <div className='card'>
       <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic'></img>
       <h5>Mens shoes</h5>
       <div className='d-flex justify-between align-center'>
       <div className='d-flex flex-column'>
         <span>Price:</span>
          <b> $100</b>
         </div>
         <button className='button '>
           <img src='/img/plus.svg' alt='plus'></img>
         </button>
       </div>
       </div>



       <div className='card'>
       <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic'></img>
       <h5>Mens shoes</h5>
       <div className='d-flex justify-between align-center'>
       <div className='d-flex flex-column'>
         <span>Price:</span>
          <b> $100</b>
         </div>
         <button className='button '>
           <img src='/img/plus.svg' alt='plus'></img>
         </button>
       </div>
       </div>


       <div className='card'>
       <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic'></img>
       <h5>Mens shoes</h5>
       <div className='d-flex justify-between align-center'>
       <div className='d-flex flex-column'>
         <span>Price:</span>
          <b> $100</b>
         </div>
         <button className='button '>
           <img src='/img/plus.svg' alt='plus'></img>
         </button>
       </div>
       </div>

       <div className='card'>
       <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic'></img>
       <h5>Mens shoes</h5>
       <div className='d-flex justify-between align-center'>
       <div className='d-flex flex-column'>
         <span>Price:</span>
          <b> $100</b>
         </div>
         <button className='button '>
           <img src='/img/plus.svg' alt='plus'></img>
         </button>
       </div>
       </div>
        </div>
      
      </section>
    </div>
  );
}

export default App;
