import styled from 'styled-components';
import FieldLabel from './FieldLabel';
import SelectInputField from './SelectInputField';
import TextAreaField from './TextAreaField';
import Button from './Button';
import CancelButton from './CancelButton';

const StoryForm = ({ bookId, storyField, onClose, onBookIdChange, onStoryChange, onSubmit, books}) => {
    return (
        <StoryFormContainer>
            <CancelButton event={onClose}>close</CancelButton>
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
