import { shallow } from "enzyme";
import Login from "./Login";

test("expect to render a Login", () => {
  const props = {
    guest: {},
    onHandleGuest: jest.fn(),
    onLogin: jest.fn(),
    onChangePage: jest.fn(), 
  };
  const wrapper = shallow(<Login {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for Login component", () => {
  const props = {
    guest: {},
    onHandleGuest: jest.fn(),
    onLogin: jest.fn(),
    onChangePage: jest.fn(), 
  };
  const wrapper = shallow(<Login {...props} />);
  expect(wrapper).toMatchSnapshot();
});