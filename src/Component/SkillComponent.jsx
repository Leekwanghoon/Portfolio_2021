import React from 'react';
import styled from 'styled-components';
import TitleComponent from './TitleComponent';
const Wrapper = styled.div`
  background-color:#f9c51d;
`;
const Skill = styled.div`
  height:970px;
  max-width: 93.25rem;
  margin: 0px auto;
`;
const SkillContent = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 728px;
`;
const SkillItem = styled.div`
  max-width: 70%;
  margin:0 58px;
  background: white;
  border-radius: 30px;
`;

const DIV1 = styled.div`
  width: 100%;
  height: 43%;
  margin-top: 10%;
  margin-bottom: 12%;
`;
const DIV2 = styled.div`
  width: 100%;
  height: 45%;
  margin-bottom: 2.5%;
`;
const DIV3 = styled.div`
  border-bottom: 1px solid #ccc;
  margin: auto 30px;
`;

const Span = styled.span`
  padding-bottom: .5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;


const SkillComponent = () => {
    return(
        <Wrapper>
        <Skill>
          <TitleComponent text="path1" />
          <SkillContent>
            <SkillItem>
              <DIV1>
              <DIV3><Span>Backend</Span></DIV3>
              <img width="100%" height="80%" alt="frontend" src="backend.png" style={{marginTop:"20px"}} />
              </DIV1>
              <DIV2>
              <DIV3><Span>Database</Span></DIV3>
              <img width="100%" height="80%" alt="frontend" src="db.PNG" style={{marginTop:"20px"}} />
              </DIV2>
            </SkillItem>
            <SkillItem> 
              <DIV3 style={{marginTop:"20px"}}><Span>Frontend</Span></DIV3>
              <img width="100%" height="80%" alt="frontend" src="frontend.png" style={{marginTop:"20px"}} />
            </SkillItem>
            <SkillItem>
              <DIV1>
              <DIV3><Span>Version Control</Span></DIV3>
              <img width="100%" height="80%" alt="frontend" src="version.png" style={{marginTop:"20px"}} />
              </DIV1>
              <DIV2>
              <DIV3><Span>Certification</Span></DIV3>
              <img width="100%" height="80%" alt="frontend" src="certification.png" style={{marginTop:"20px"}} />
              </DIV2>
            </SkillItem>
          </SkillContent>
        </Skill>
      </Wrapper>
    );
}

export default SkillComponent;