import { shallow } from "enzyme";
import InputField from "./InputField";

const wrapper = shallow(<InputField />);

test("expect to render a InputField", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot to InputField component", () => {
  expect(wrapper).toMatchSnapshot();
});