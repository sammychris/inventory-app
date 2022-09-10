import { shallow } from "enzyme";
import DataCard from "./DataCard";

const wrapper = shallow(<DataCard />);

test("expect to render a datacard", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot of datacard component", () => {
  expect(wrapper).toMatchSnapshot();
});