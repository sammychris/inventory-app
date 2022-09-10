import { shallow } from "enzyme";
import BookList from "./BookList";

test("expect to render a BookList", () => {
  const props = {
    books: [{}],
    onUpdateBook: jest.fn(),
    onDeleteBook: jest.fn(),
  };
  const wrapper = shallow(<BookList {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for BookList component", () => {
  const props = {
    books: [],
    onUpdateBook: jest.fn(),
    onDeleteBook: jest.fn(),
  };
  const wrapper = shallow(<BookList {...props} />);
  expect(wrapper).toMatchSnapshot();
});