import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AboutComponent from './Component/AboutComponent';
import ArchivingComponent from './Component/ArchivingComponent';
import FooterComponent from './Component/FooterComponent';
import MainComponent from './Component/MainComponent';
import SkillComponent from './Component/SkillComponent';

const Background = styled.div`
  height:100%;
  position: relative;
`;




const App = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    
    if(scrollY > 0) {
      document.getElementById("header").style.background = '#1b1b1bbd';
    } else {
      document.getElementById("header").style.background = 'none';
    }
    
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return(
    <Background>
      <MainComponent setScrollY={setScrollY} />
      <AboutComponent />
      <SkillComponent />
      <ArchivingComponent />
      <FooterComponent />
    </Background>
  );
}

export default App;