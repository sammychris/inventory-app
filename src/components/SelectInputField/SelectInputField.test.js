import { shallow } from "enzyme";
import SelectInputField from "./SelectInputField";

const wrapper = shallow(<SelectInputField />);

test("expect to render a SelectInputField", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for SelectInputField component", () => {
  expect(wrapper).toMatchSnapshot();
});