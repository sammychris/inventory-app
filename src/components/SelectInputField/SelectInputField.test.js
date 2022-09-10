import { shallow } from "enzyme";
import SelectInputField from "./SelectInputField";

test("expect to render a SelectInputField", () => {
  const props = {
    books: [],
    bookId: "0",
    event: jest.fn(),
  };
  const wrapper = shallow(<SelectInputField {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for SelectInputField component", () => {
  const props = {
    books: [],
    bookId: "0",
    event: jest.fn(),
  };
  const wrapper = shallow(<SelectInputField {...props} />);
  expect(wrapper).toMatchSnapshot();
});