import Card from "../index"
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

const fun = jest.fn()
const data = {
  id : 1,
  title:"Fake shoe",
  price:451,
  imageURL:"https://i.imgur.com/LpaY82x.png",
  onClickAdd:fun,
  onClickFavorite:fun,
  favorited:false,
  loading:false,
}

const setUp = props => shallow(<Card {...props} />)

describe("should render Card component", () => {

  it('should contain .card wrapper', () => {
    const component = setUp()
    const wrapper = component.find(".card")
    expect(wrapper.length).toBe(1)
  })
  
  it("should has props",()=>{
    const component = setUp({data})
  const priceValue = component.find("h5")
  expect(priceValue).toHaveLength(1)
  })

  it('should .price === $451', () => {
    const price = 451
    const component = setUp({price})
    const priceValue = component.find(".price")
    expect(priceValue.text()).toBe("$451")
  })
})
