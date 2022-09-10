import { shallow } from "enzyme";
import Register from "./Register";

test("expect to render a Register", () => {
  const props = {
    guest: {},
    onHandleGuest: jest.fn(),
    onSaveUser: jest.fn(),
    onChangePage: jest.fn(),
  };
  const wrapper = shallow(<Register {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for Register component", () => {
  const props = {
    guest: {},
    onHandleGuest: jest.fn(),
    onSaveUser: jest.fn(),
    onChangePage: jest.fn(), 
  };
  const wrapper = shallow(<Register {...props} />);
  expect(wrapper).toMatchSnapshot();
});