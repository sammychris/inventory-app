import { shallow } from "enzyme";
import StoryList from "./StoryList";

test("expect to render a StoryList", () => {
  const props = { 
    stories: [{}],
    onUpdateStory: jest.fn(),
    onDeleteStory: jest.fn(),
  };
  const wrapper = shallow(<StoryList {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for StoryList component", () => {
  const props = {
    stories: [{}],
    onUpdateStory: jest.fn(),
    onDeleteStory: jest.fn(), 
  };
  const wrapper = shallow(<StoryList {...props} />);
  expect(wrapper).toMatchSnapshot();
});