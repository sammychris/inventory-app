import React from 'react';
import styled from 'styled-components';


const Button = ({children, event, cls, size, position, type=""}) => {
    return (
        <ButtonContainer onClick={event} size={size} position={position} type={type} cls={cls}>
            {children}
        </ButtonContainer>
    );
  }


export default Button;

const ButtonContainer = styled.button`
    font-size: 16px;
    padding: 5px 10px;
    margin: 20px 10px 0 0;
    cursor: pointer;
    &:hover {
        background: #c14f4f;
    }
    ${props => props.size === "small" &&`
        font-size: 12px;
        padding: 5px 10px;
        border: 0;
        margin-right: 20;
    `}
    ${props => props.position === 'right' &&`
        position: absolute;
        top: 0;
        right: 0;
    `}
    ${props => props.cls === 'danger' &&`
        background: #f96565;
        color: #fff;
        border: 0;
        &:hover {
            background: #c14f4f;
        }
        &:hover {
            background: #c14f4f;
        }
    `}
    ${props => props.cls === 'active' &&`
        background: #fff;
        color: #000;
        border: 0;
        &:hover {
            background: #c14f4f;
        }
    `}
    
`;
