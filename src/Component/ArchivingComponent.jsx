import React from 'react';
import styled from 'styled-components';
import TitleComponent from './TitleComponent';
const Wrapper = styled.div`
    background-color:#222;
`;
const Archiving = styled.div`
    max-width: 93.25rem;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 30px;
`;

const ArchivingContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 346px;
    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: 346px 346px 346px;
        grid-row-gap: 23px;
  }
`;

const ArchivingItem = styled.div`
    margin:0 58px;
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 1rem;
    cursor:pointer;
    &:hover {
        position: relative;
        top:10px;
    }
`;

const DIV1 = styled.div`
    margin-bottom: 1rem;
    color: #258ddb;
`;
const DIV2 = styled.div`

`;

const Ul = styled.ul`
    padding-left: 18px;
`;

const Li = styled.li`
    margin-bottom: 3px;
`;
const ArchivingComponent = () => {
    return(
        <Wrapper>
            <Archiving>
                <TitleComponent color="#ffffff" text="Archiving" />
                <ArchivingContent>
                    <ArchivingItem>
                        <img alt="git" src="git.png" />
                        <DIV1>https://github.com/Leekwanghoon</DIV1>
                        <DIV2><p><b>소스 코드 저장소</b>입니다.</p></DIV2>
                        <Ul>
                            <Li>과거 프로젝트, 앱의 소스코드</Li>
                            <Li>혼자서 놀던 클론 프로젝트</Li>
                            <Li>여러 알고리즘 소스코드</Li>
                        </Ul>
                    </ArchivingItem>
                    <ArchivingItem>
                        <img alt="blog" src="tstory.png" />
                        <DIV1>https://blog.naver.com/vkdnj4158</DIV1>
                        <DIV2><p><b>공부 및 지식 공유 목적의 블로그</b>입니다.</p></DIV2>
                        <Ul>
                            <Li>알고리즘 코딩문제 풀이</Li>
                            <Li>학습한 알고리즘 정리</Li>
                            <Li>나의 개발일지</Li>
                            <Li>정확한 이해를 위한 학습내용 기록</Li>
                        </Ul>
                    </ArchivingItem>
                    <ArchivingItem>
                        <img alt="solved" width="219px" height="74px" src="solved.png" />
                        <DIV1>https://solved.ac/profile/kh941217</DIV1>
                        <DIV2><p><b>백준 Ranking</b>입니다.</p></DIV2>
                        <Ul>
                            <Li>나의 백준 랭크</Li>
                            <Li>백준랭크 / GOLD5</Li>
                            <Li>백준랭킹 / 11000</Li>
                        </Ul>
                    </ArchivingItem>
                </ArchivingContent>
            </Archiving>
        </Wrapper>
    );
}

export default ArchivingComponent;