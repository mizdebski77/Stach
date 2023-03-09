import styled, { css } from "styled-components";

export const Wrapper = styled.section`
background:  #252A32;
padding-top:100px ;
min-height: 100vh;

`;

export const ImagesContainer = styled.div`
display: grid;
padding: 50px;
grid-template-columns:1fr 1fr ;
grid-gap: 50px;
width: 80%;
margin: 0 auto;
`;

export const ImageContainer = styled.div`
width: 100%;
color: white;
border: 1px solid white;
background:#252A32 ;
box-shadow: 0 0 10px rgb(148, 152, 158);
overflow: hidden;`

export const Image = styled.img`
max-width: 700px;
width: 100%;
cursor: pointer;
transition: 0.5s linear;
transition-timing-function:ease-in-out;

&:hover{
zoom: normal;
transform: scale(1.1);
opacity: 60%;
}

`;

export const FullScreenWrapper = styled.div`
  display: ${({ fullScreenPhoto }) => (fullScreenPhoto ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 120px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const FullScreenImage = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 1300px;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 100px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
`;

export const AdditionalImages = styled.div`
display: grid;
padding: 50px;
grid-template-columns:1fr 1fr ;
grid-gap: 50px;
width: 80%;
margin: 0 auto;
${({ showMore }) => showMore && css`
    display: none;
`};`;

export const MoreButton = styled.button`
color: orange;
align-self: end;
padding: 20px;
margin-bottom: 150px;
font-size: 20px;
text-align: right;
background: transparent;
border: none;
padding-right: 0;
transition: 0.5s;
margin-right: 15%;

&:hover {
    cursor: pointer;
    color: white;
    transform: translateY(-7px);
};`;





