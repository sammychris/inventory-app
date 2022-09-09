import React from 'react';
import styled from 'styled-components';


const Frame = ({children}) => {
    return (
        <FrameContainer>
            {children}
        </FrameContainer>
    );
  }


export default Frame;

const FrameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
`;
