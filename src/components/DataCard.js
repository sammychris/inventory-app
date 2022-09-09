import React from 'react';
import styled from 'styled-components';


const DataCard = ({title, count}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ContentValue>{count}</ContentValue>
        </Container>
    );
  }


export default DataCard;

const Container = styled.div`
    height: 118px;
    width: 307px;
    border-radius: 10px;
    padding: 12px 15px 12px 15px;
    background: #fff;
    color: #000;
    margin-right: 20px;
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