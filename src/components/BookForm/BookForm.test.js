import { shallow } from "enzyme";
import BookForm from "./BookForm";

test("expect to render a BookForm", () => {
  const props = {
    bookField: '',
    onClose: jest.fn(), 
    onBookChange:  jest.fn(),
    onSubmit:  jest.fn(),
  };
  const wrapper = shallow(<BookForm {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for BookForm component", () => {
  const props = {
    bookField: '',
    onClose: jest.fn(), 
    onBookChange:  jest.fn(),
    onSubmit:  jest.fn(),
  };
  const wrapper = shallow(<BookForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});