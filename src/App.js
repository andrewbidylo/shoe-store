function App() {
  return (
    <div className="wrapper">
      <header className="App-header">
        <div className="headerLeft">
          <img src='img/logo.png' alt='logo-sneakers'/>
          <div className='headerInfo'>
            <h3>React Sneakers</h3>
            <p>Sneakers store</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <svg />
            <span>
              $100
            </span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <section className='content'>
        <h1>All Sneakers</h1>
        ......
      </section>
    </div>
  );
}

export default App;
