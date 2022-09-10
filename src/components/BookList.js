import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const BookList = ({books, onUpdateBook, onDeleteBook}) => {
    return (
        books.map((item, i) => {
            const {id, book} = item; 
            return (
                <ItemContainer key={i}>
                    <Span>id-{id}</Span><Span>{book}</Span>
                    <div>
                      <Button cls="primary" event={() => onUpdateBook(item)}>Edit</Button>
                      <Button cls="danger" event={() => onDeleteBook(item)}>Delete</Button>
                    </div>
                </ItemContainer>
            )
        })
    );
  }


export default BookList;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 10px;
  border-color: #cfcfcf;
  border-width: 0.1em 0;
  border-style: solid;
  &:hover {
    box-shadow: 1px 3px 1px 1px #f5f5f5;
    z-index: 1;
    border-width: 1px;
  }
`;

const Span = styled.span`
  color: cadetblue;
  font-size: 16px;
  font-weight: 600;
`;
