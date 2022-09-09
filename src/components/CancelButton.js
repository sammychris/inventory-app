import React from 'react';
import styled from 'styled-components';


const CancelButton = ({children, event}) => {
    return (
        <ButtonContainer onClick={event}>
            {children}
        </ButtonContainer>
    );
  }


export default CancelButton;

const ButtonContainer = styled.button`
    font-size: 12px;
    padding: 5px 11px;
    position: absolute;
    top: 0;
    right: 0;
    background: #f96565;
    color: #fff;
    border: 0;
    cursor: pointer;
    &:hover {
        background: #c14f4f;
    }
`;
