import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
      <>
        <Container>
          <HeaderSection>
            <Navigation>
              Logo
            </Navigation>
            <Actions>
              User
            </Actions>
          </HeaderSection>
        </Container>
      </>
    );
  }


export default Header;

const Container = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
`;

const HeaderSection = styled.header`
  height: 80px;
  max-width: 1230px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Navigation = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  width: 234px;
  justify-content: space-around;
`;

const Actions = styled.div`
  width: 234px;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;