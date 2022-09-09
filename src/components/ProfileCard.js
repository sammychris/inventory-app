import React from 'react';
import styled from 'styled-components';
import H2Text from './H2Text';
import PText from './PText';


const ProfileCard = ({user, onLogout}) => {
    return (
        <Container>
            <PictureContainer>
            </PictureContainer>
            <H2Text align={'center'}>{user.name}</H2Text>
            <PText align={'center'}>My name is {user.name}. I'm a software engineer.</PText>
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
    margin: auto;
`;

const Container = styled.div`
    width: 25%;
    border-radius: 10px;
    background: #fff;
    color: #000;
    padding: 20px;
`