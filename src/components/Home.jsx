import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";


const Home = () => {
  

  return (
      <Container>
        <ImageSlider />
        <Viewers />
        <Movies />
      </Container>
  )
};


export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(1.5vw + 5px);
  overflow-x: hidden;
  /* &::before {
    background: url("/images/home-background.png") center center cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  } */
`;
