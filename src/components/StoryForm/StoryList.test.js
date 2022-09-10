import { shallow } from "enzyme";
import StoryForm from "./StoryForm";

test("expect to render a StoryForm", () => {
  const props = { 
    bookId: '0',
    storyField: 'sammy',
    onClose: jest.fn(),
    onBookIdChange: jest.fn(),
    onStoryChange: jest.fn(),
    onSubmit: jest.fn(),
    books: []
  };
  const wrapper = shallow(<StoryForm {...props} />);
  expect(wrapper.length).toEqual(1);
});

test("expect to make a snap shot for StoryForm component", () => {
  const props = {
    bookId: '0',
    storyField: 'sammy',
    onClose: jest.fn(),
    onBookIdChange: jest.fn(),
    onStoryChange: jest.fn(),
    onSubmit: jest.fn(),
    books: []
  };
  const wrapper = shallow(<StoryForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});