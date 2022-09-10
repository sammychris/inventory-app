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