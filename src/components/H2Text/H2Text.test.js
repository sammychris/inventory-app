import { shallow } from "enzyme";
import H2Text from "./H2Text";

const wrapper = shallow(<H2Text />);

test("expect to render a H2Text", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to H2Text component", () => {
  expect(wrapper).toMatchSnapshot();
});