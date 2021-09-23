import React from 'react';
import styled from 'styled-components';
import ShowIcon from './ShowIcon';
import TitleComponent from './TitleComponent';

const Wrapper = styled.div`
`;

const About = styled.div`
  height:500px;
  max-width: 93.25rem;
  margin: 0px auto;
`;
const AboutContent = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 150px 150px;
`;

const AboutItem = styled.div`
  max-width: 70%;
  margin:0 58px;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 31px;
`;

const BIGSPAN = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;
const SmallSpan = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;

const title = ["Name","BirthDay","Address","Phone_Number","Email","Degree"]
const content = ["LeeKwangHoon","94.12.17","서울시 동작구","010-2645-4802","vkdnj4158@naver.com","Korea University"]

const AboutComponent = () => {
    return(
      <Wrapper>
        <About>
          <TitleComponent text="ABOUT ME" />
          <AboutContent>
            {title.map((value,index) => {
                return(
                    <AboutItem key={index}>
                        <IconDiv>
                            <ShowIcon index={index} size="30px" />
                            <Content>
                                <div><BIGSPAN>{value}</BIGSPAN></div>
                                <div style={{marginTop:"12px"}}><SmallSpan>{content[index]}</SmallSpan></div>
                            </Content>
                       </IconDiv>
                    </AboutItem>
                );
            })}
          </AboutContent>
        </About>
      </Wrapper>
    );
}

export default AboutComponent;
