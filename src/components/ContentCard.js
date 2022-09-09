import React from 'react';
import styled from 'styled-components';


const ContentCard = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
  }


export default ContentCard;

const Container = styled.div`
    min-height: 200px;
    width: 100%;
    border-radius: 10px;
    padding: 12px 15px 12px 15px;
    background: #fff;
    color: #000;
    margin-top: 20px;
`

const Title = styled.span`
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0em;
`;

const ContentValue = styled.div`
    font-family: Poppins;
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
`;