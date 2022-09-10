import { shallow } from "enzyme";
import FieldLabel from "./FieldLabel";

const wrapper = shallow(<FieldLabel />);

test("expect to render a FieldLabel", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to FieldLabel component", () => {
  expect(wrapper).toMatchSnapshot();
});