import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: black;
  height: 90px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const FooterComponent = () => {
    return(
        <Footer>
            <div>ⓒ  2021.Lee Kwang Hoon.All rights reserved.</div>
        </Footer>
    );
}

export default FooterComponent;