import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Item = ({id, story}) => {
    return (
        <ItemContainer>
            <span>Id: {id} </span><span>Story: {story}</span><Button>Edit</Button><Button>Delete</Button>
        </ItemContainer>
    );
  }


export default Item;

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
