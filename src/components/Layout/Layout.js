import React from 'react';
import styled from 'styled-components';


const Layout = ({children}) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
  }


export default Layout;

const LayoutContainer = styled.div`
    display: flex;
    max-width: 1230px;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`;
