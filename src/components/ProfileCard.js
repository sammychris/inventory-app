import React from 'react';
import styled from 'styled-components';


const ProfileCard = ({onLogout}) => {
    return (
        <Container>
            <PictureContainer>
            </PictureContainer>
            <Title>Book Stories</Title>
            <Description>My name is Samuel Christopher. I'm a software engineer.</Description>
            <a href="#" onClick={onLogout}>Logout</a>
        </Container>
    );
  }


export default ProfileCard;

const PictureContainer = styled.div`
    background: grey;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const Container = styled.div`
    height: 200px;
    width: 25%;
    border-radius: 10px;
    padding: 12px 0;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.span`
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0em;
`;

const Description = styled.div`
    font-family: Poppins;
    font-size: 18px;
`;