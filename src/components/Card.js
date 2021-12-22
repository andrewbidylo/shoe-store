const Card = () => {
  return (
    <div className='card' >
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
  )
}

export default Card


