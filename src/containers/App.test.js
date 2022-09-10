import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

it("expect to render app component", () => {
  expect(wrapper.length).toEqual(1);
});

it("expect to take snap shot of app component", () => {
  expect(wrapper).toMatchSnapshot();
});