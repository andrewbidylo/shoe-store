function App() {
  return (
    <div className="wrapper clear">

      <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30 d-flex justify-between'>Cart
          <img className='remove-btn cu-p' src='/img/btn-remove.svg' alt='remove'/>
          </h2>
          <div className='items'>
          <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
            <p className='cart-discription'>Mens shoes New model 2022</p>
                <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove'/>
            </div>

            <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
            <p className='cart-discription'>Mens shoes New model 2022</p>
                <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove'/>
            </div>

            <div className='cartItem d-flex align-center '>
            <img src='/img/sneakers/1.png' alt='plus' className='sneakers-pic' />
            <div className='m-10'>
            <p className='cart-discription'>Mens shoes New model 2022</p>
                <b> $100</b>
            </div>
            <img className='remove-btn' src='/img/btn-remove.svg' alt='remove'/>
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
        <img src ='/img/arrow.svg' alt='arrow'/>
        </button>


</div>
        
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className='logo' src='img/logo.png' alt='logo-sneakers' />
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Sneakers store</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img src='/img/cart.svg' alt='' />
            <span>
              $100
            </span>
          </li>
          <li>
            <img src='/img/user.svg' alt='' />
          </li>
        </ul>
      </header>
      <section className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>All Sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search'></input>
          </div>
        </div>


        <div className='allSneackers d-flex justify-between'>
          <div className='card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>

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
    </div >
  );
}

export default App;
