import Drawer from "../../Header/index"
import { screen, act, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { AppContext } from '../../../context';


const itemsForCart = [
  {
    "id": 1,
    "title": "Men's Boost ZK3 shoes 2022",
    "price": 122,
    "imageURL": "./img/shoes/1.png"
  }
]


const renderWirhRouter = props => render(
      <MemoryRouter >
      <AppContext.Provider value={{itemsForCart}} >
        <Drawer {...props}/>
      </AppContext.Provider>
      </MemoryRouter>
      )
  

test("",async()=>{
  await act(async () => renderWirhRouter(itemsForCart))
  const favoritesLink = screen.getByTestId('favorites-link')
  const orderLink = screen.getByTestId('orders-link')
  
})
