import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const BookList = ({books, onUpdateBook, onDeleteBook}) => {
    return (
        books.map((item, i) => {
            const {id, book} = item; 
            return (
                <ItemContainer key={i}>
                    <span>Id: {id} </span><span>book: {book}</span>
                    <Button event={() => onUpdateBook(item)}>Edit</Button>
                    <Button event={() => onDeleteBook(item)}>Delete</Button>
                </ItemContainer>
            )
        })
    );
}


export default BookList;

const ItemContainer = styled.div`
  color: grey;
  font-weight: bolder;
  padding: 10px;
  border-color: #cfcfcf;
  border-width: 0.1em 0;
  border-style: solid;
  &:hover {
    box-shadow: 1px 3px 1px 1px #f5f5f5;
    z-index: 1;
    border-width: 1px;
  }

`;
