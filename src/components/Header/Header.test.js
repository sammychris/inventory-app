import { shallow } from "enzyme";
import Header from "./Header";

const wrapper = shallow(<Header />);

test("expect to render a Header", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to Header component", () => {
  expect(wrapper).toMatchSnapshot();
});