import Header from "../../Header/index"
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

const renderWithRouter = props => render(
      <MemoryRouter >
      <AppContext.Provider value={{itemsForCart}} >
        <Header {...props}/>
      </AppContext.Provider>
      </MemoryRouter>
      ) 
  
it("should render Header component with favorites-link' and orders-link",async()=>{
  await act(async () => renderWithRouter(itemsForCart))
  screen.getByTestId('favorites-link')
  screen.getByTestId('orders-link')
  
})
