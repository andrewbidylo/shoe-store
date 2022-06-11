import App from "./App"
import { screen, act, render } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

// Shallow render
const renderer = new ShallowRenderer();

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  post: jest.fn(),
  get: jest.fn(),
  delete: jest.fn()

}))

describe("App component", () => {

  // Setup App component. MemoryRouter keeps the history of your “URL” in memory 
  const setUp = props => render(
    <MemoryRouter >
      <App />
    </MemoryRouter>)

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let response
  beforeEach(() => {
    axios.get.mockReturnValue(response)
    response = {
      data: [
        {
          "id": 1,
          "title": "Men's Boost ZK3 shoes 2022",
          "price": 122,
          "imageURL": "./img/shoes/1.png"
        },
        {
          "id": 2,
          "title": "Men's Grand Low shoes 2021",
          "price": 299,
          "imageURL": "./img/shoes/2.png"
        },
        {
          "id": 3,
          "title": "Women's Star Race shoes 2022",
          "price": 329,
          "imageURL": "./img/shoes/3.png"
        },
      ]
    }
  }
  )

  it('should render App component without crashing"', async () => {
    renderer.render(<App />)

  })

  it("should call axios get 3 times", async () => {
    await act(async () => setUp())
    expect(axios.get).toBeCalledTimes(3)

  })
  it('should render item with the title = "Men`s Boost ZK3 shoes 2022"', async () => {
    await act(async () => setUp())
    const shoes = await screen.findByText("Men's Boost ZK3 shoes 2022")
    expect(shoes).toBeVisible()
  })

  it('should hendel the errors when sent get request', async () => {
    const customErrorMessage = { message: "There is an error occurred" }
    axios.get.mockRejectedValue(() => Promise.reject(new Error(customErrorMessage.message)))
    await act(async () => setUp())
    try {
      expect(axios.get).toBeCalledTimes(3)
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      await expect(error.message).rejects.toEqual(customErrorMessage.message)
    }
  })
  
})