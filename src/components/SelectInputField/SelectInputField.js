import React from 'react';
import styled from 'styled-components';


const SelectInputField = ({event, bookId, books}) => {
    return (
        <Select value={bookId} onChange={event}>
          <option value="">none</option>
          {
            books.map((item, i) => <option key={i} value={item.id}>{item.book}</option>)
          }
        </Select>
    );
  }


export default SelectInputField;

const Select = styled.select`
  width: 500px;
  height: 30px;
  font-size: 18px;
  margin: 5px 0;
`;
