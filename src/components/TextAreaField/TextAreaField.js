import React from 'react';
import styled from 'styled-components';


const TextAreaField = ({value, event}) => {
    return (
      <Textarea value={value} onChange={event} />
    );
  }


export default TextAreaField;


const Textarea = styled.textarea`
  width: 500px;
  height: 100px;
  font-size: 18px;
  margin: 5px 0;
`;
