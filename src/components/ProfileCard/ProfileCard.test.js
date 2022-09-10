import { shallow } from "enzyme";
import ProfileCard from "./ProfileCard";

test("expect to render a ProfileCard", () => {
  const props = {
    user: {},
    onLogout: jest.fn(),
  };
  const wrapper = shallow(<ProfileCard {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for ProfileCard component", () => {
  const props = {
    user: {},
    onLogout: jest.fn(),
  };
  const wrapper = shallow(<ProfileCard {...props} />);
  expect(wrapper).toMatchSnapshot();
});