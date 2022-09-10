import { shallow } from "enzyme";
import PText from "./PText";

const wrapper = shallow(<PText />);

test("expect to render a PText", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to PText component", () => {
  expect(wrapper).toMatchSnapshot();
});