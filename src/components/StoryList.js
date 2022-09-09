import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const StoryList = ({stories, onUpdateStory, onDeleteStory}) => {
    return (
        stories.map((item, i) => {
            const {id, story} = item; 
            return (
                <ItemContainer key={i}>
                    <span>Id: {id} </span><span>Story: {story}</span>
                    <Button event={() => onUpdateStory(item)}>Edit</Button>
                    <Button event={() => onDeleteStory(item)}>Delete</Button>
                </ItemContainer>
            )
        })
    );
  }


export default StoryList;

const ItemContainer = styled.div`
  color: grey;
  font-weight: bolder;
  padding: 10px;
  border-color: #cfcfcf;
  border-width: 0.1em 0;
  border-style: solid;
  &:hover {
    box-shadow: 1px 3px 1px 1px #f5f5f5;
    z-index: 1;
    border-width: 1px;
  }

`;
