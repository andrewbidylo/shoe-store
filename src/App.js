function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className= 'logo' src='img/logo.png' alt='logo-sneakers'/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Sneakers store</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img src='/img/cart.svg' />
            <span>
              $100
            </span>
          </li>
          <li>
          <img src='/img/user.svg' />
          </li>
        </ul>
      </header>
      <section className='p-40'>
        <h1>All Sneakers</h1>
        ......
      </section>
    </div>
  );
}

export default App;
