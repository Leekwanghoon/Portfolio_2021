import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  height:600px;
  background-repeat : no-repeat;
  background-image: url("images.jpg");
  background-size : cover;
`;

  const Header = styled.div`
  height:92px;
  position:fixed;
  width:100%;
  z-index:3;
`;
const Navi = styled.div`
  display:flex;
  height: 100%;
  align-items:center;
`;
const Portfolio = styled.div`
  width: 50%;
  cursor: pointer;
  color: white;
  position: relative;
  left: 121px;
  font-size: 25px;
  font-family: serif;
`;
const Menu = styled.div`
  width: 50%;
  display:flex;
  justify-content: space-evenly;
`;

const Span = styled.span`
  color: white;
  cursor:pointer;
  z-index:3;
  &:hover {
    color:orange;
  }
`;
const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 90%;
 font-family: fantasy;
`;
const Title = styled.div`
  font-size:50px;
  color:white;
`;
const Introduction = styled.div`
  padding-top: 70px;
  color: white;
  font-size: 25px;
  align-items: center;
`;
const IntDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size:20px;
`;
const MainComponent = ({setScrollY}) => {

  const goNavi = (title) => {
    console.log(title)
    switch(title) {
      case "main":
        window.scrollTo({top:0, left:0, behavior:'smooth'});
        setScrollY(0)
        break;
      case "about":
        window.scrollTo({top:510, left:0, behavior:'smooth'});
        setScrollY(510)
        break;
      case "skills":
        window.scrollTo({top:810, left:0, behavior:'smooth'});
        setScrollY(810)
        break;
      case "projects":
        window.scrollTo({top:1110, left:0, behavior:'smooth'});
        setScrollY(1110)
        break;
      case "careers":
        window.scrollTo({top:1410, left:0, behavior:'smooth'});
        setScrollY(1410)
        break;
      default:
        window.scrollTo({top:0, left:0, behavior:'smooth'});
     }
  }

  return(
        <Main id="Main">
            <Header id="header">
              <Navi>
                  <Portfolio onClick={() => goNavi("main")}>Huni's Portfolio</Portfolio>
                  <Menu>
                    <Span onClick={() => goNavi("about")}>about me</Span>
                    <Span onClick={() => goNavi("skills")}>skills</Span>
                    <Span onClick={() => goNavi("projects")}>Project</Span>
                    <Span onClick={() => goNavi("careers")}>careers</Span>
                  </Menu>
              </Navi>
            </Header>
            <Content>
              <Title> - KwangHoon - </Title>
              <Title> Web Developer</Title>
              <Introduction> 
                <IntDiv>Hello ! </IntDiv>
                <IntDiv>I always live doing what I want to do.</IntDiv> 
              </Introduction>
            </Content>
        </Main>
    );
}

export default MainComponent;