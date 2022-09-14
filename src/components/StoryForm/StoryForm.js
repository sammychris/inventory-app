import styled from 'styled-components';
import FieldLabel from '../FieldLabel';
import SelectInputField from '../SelectInputField';
import TextAreaField from '../TextAreaField';
import Button from '../Button';

const StoryForm = ({ bookId, storyField, onClose, onBookIdChange, onStoryChange, onSubmit, books}) => {
    return (
        <StoryFormContainer>
            <Button cls="danger" position="right" size="small" event={() => onClose('story')}>close</Button>
            <FieldLabel title="Select a book category" />
            <SelectInputField event={onBookIdChange} bookId={bookId} books={books}/>
            <TextAreaField value={storyField} event={onStoryChange} />
            <div>
                <Button event={onSubmit}>Save</Button>
            </div>
        </StoryFormContainer>
    );
  }


export default StoryForm;

const StoryFormContainer = styled.div`
    background: whitesmoke;
    padding: 20px;
    position: relative;
`;
