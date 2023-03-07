import styled from "styled-components";

export const Wrapper = styled.section`
  background: #94989E;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;
