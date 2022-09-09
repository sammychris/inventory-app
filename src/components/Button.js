import React from 'react';
import styled from 'styled-components';


const Button = ({children, event, type=""}) => {
    return (
        <ButtonContainer onClick={event} primary type={type}>
            {children}
        </ButtonContainer>
    );
  }


export default Button;

const ButtonContainer = styled.button`
    font-size: 16px;
    padding: 5px 10px;
    margin: 5px 5px 0 0;
    cursor: pointer;
    ${props => props.primary &&`
        background: white;
        color: black;
    `}
    ${props => props.cancel &&`
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
    `}
    ${props => props.active &&`
        background: #fff;
        border: 0;
        color: #000;
        padding: 5px 10px;
        margin: 20;
`}
    
`;
