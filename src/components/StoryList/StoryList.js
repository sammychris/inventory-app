import React from 'react';
import styled from 'styled-components';
import Button from '../Button';


const StoryList = ({stories, onUpdateStory, onDeleteStory}) => {
    if(!stories.length) return <Message>No story yet!</Message>;
    return (
        stories.map((item, i) => {
            const {id, story} = item; 
            return (
                <ItemContainer key={i}>
                    <Span>id-{id}</Span><Span>{story}</Span>
                    <div>
                      <Button cls="primary" event={() => onUpdateStory(item)}>Edit</Button>
                      <Button cls="danger" event={() => onDeleteStory(item)}>Delete</Button>
                    </div>
                </ItemContainer>
            )
        })
    );
  }


export default StoryList;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 10px;
  border-color: #cfcfcf;
  border-width: 0.1em 0;
  border-style: solid;
  &:hover {
    box-shadow: 1px 3px 1px 1px #f5f5f5;
    z-index: 1;
    border-width: 1px;
  }
`;

const Span = styled.span`
  color: cadetblue;
  font-size: 16px;
  font-weight: 600;
`;

const Message = styled.div`
  margin-top: 20px;
  text-align: center;
`;
