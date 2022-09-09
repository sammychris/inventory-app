import React from 'react';
import styled from 'styled-components';


const InputField = ({value, name, event, placeholder="", type="", required=false}) => {
    return (
        <Input value={value} name={name} onChange={event} placeholder={placeholder} type={type} required={required} />
    );
  }


export default InputField;

const Input = styled.input`
  width: 500px;
  height: 30px;
  font-size: 18px;
  margin: 5px 0;
`;

