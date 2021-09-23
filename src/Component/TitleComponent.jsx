import React from 'react';
import styled from 'styled-components';
import { LinkIcon } from '../utils/icon';

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const TitleSpan = styled.span`
    color:${props => props.color ? props.color : "#000000"};
    border-bottom-color: #cccccc;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-family: fantasy;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.5;
`;


const DIV = styled.div`
  opacity: 0.7;
  position: relative;
  left: -15px;
`;


const TitleComponent = ({text,color="#000000"}) => {
    return(
        <Title>
          <DIV>
            <LinkIcon size={30} />
          </DIV>
          <TitleSpan color={color}>{text}</TitleSpan>
        </Title>
    );
}

export default TitleComponent;