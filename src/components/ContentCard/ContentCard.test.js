import { shallow } from "enzyme";
import ContentCard from "./ContentCard";

const wrapper = shallow(<ContentCard />);

test("expect to render a ContentCard", () => {
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot of ContentCard component", () => {
  expect(wrapper).toMatchSnapshot();
});