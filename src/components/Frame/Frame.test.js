import { shallow } from "enzyme";
import Frame from "./Frame";

const wrapper = shallow(<Frame />);

test("expect to render a Frame", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to Frame component", () => {
  expect(wrapper).toMatchSnapshot();
});