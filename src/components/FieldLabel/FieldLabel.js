import React from 'react';
import styled from 'styled-components';


const FieldLabel = ({title}) => {
    return (
      <Label>{title}</Label>
    );
  }


export default FieldLabel;


const Label = styled.label`
  font-size: 18px;
  margin: 5px 0;
  display: block;
`;
