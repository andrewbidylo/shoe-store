import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <section className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>All Sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Search'></input>
          </div>
        </div>
        <div className='allSneackers d-flex justify-between'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
