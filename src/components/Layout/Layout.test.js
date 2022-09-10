import { shallow } from "enzyme";
import Layout from "./Layout";

const wrapper = shallow(<Layout />);

test("expect to render a Layout", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to Layout component", () => {
  expect(wrapper).toMatchSnapshot();
});