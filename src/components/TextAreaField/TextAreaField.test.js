import { shallow } from "enzyme";
import TextAreaField from "./TextAreaField";

const wrapper = shallow(<TextAreaField />);

test("expect to render a TextAreaField", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to TextAreaField component", () => {
  expect(wrapper).toMatchSnapshot();
});