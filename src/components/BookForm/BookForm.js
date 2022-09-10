import styled from 'styled-components';
import Button from '../Button';
import FieldLabel from '../FieldLabel';
import InputField from '../InputField';


const BookForm = ({bookField, onClose, onBookChange, onSubmit}) => {
    return (
        <BookFormContainer>
            <Button cls="danger" position="right" size="small" event={onClose}>close</Button>
            <FieldLabel title="Enter book category" />
            <InputField event={onBookChange} value={bookField}/>
            <div>
                <Button event={onSubmit}>Save</Button>
            </div>
        </BookFormContainer>
    );
  }


export default BookForm;

const BookFormContainer = styled.div`
    background: whitesmoke;
    padding: 20px;
    position: relative;
`;
