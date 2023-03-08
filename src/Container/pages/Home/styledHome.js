import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.section`
background:  #252A32;
`;


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height:100vh;
  height: 100%;
  overflow: hidden;
  transition: min-height 0.5s ease; /* Add smooth transition effect */

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    min-height: 40vh;
  };
`;

export const Image = styled.img`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
transition: transform 0.5s ease-in-out;
`;

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
`;

export const Title = styled.h1`
color: white;
font-weight: normal;
font-size: 40px;
background:#B55A08;
border-radius: 20px;
padding: 20px;
margin: 20px;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
  font-size: 25px;
  padding: 10px;
  margin: 10px;

  };
`;



export const ButtonLink = styled(Link)`
font-size: 20px;
text-decoration: none;
color: orange;
transition: 1s;
padding: 0 40px 40px 0 ;
margin-right: 60px;
&:hover {
  transition: 1s ;
  color:white ;
}
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
  padding:0 20px 40px 20px;
  margin-right: 0;

  };
`;

export const Section = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 100px;
align-items: center;
justify-content: center;
padding: 100px;
padding-bottom: 20px;
min-height: 70vh;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    grid-template-columns: 1fr;
    grid-gap: 50px;
    padding: 20px;

  };
`;


export const Photo = styled.img`
width: 100%;
border-radius: 20px;
box-shadow: 0 0 10px rgb(148, 152, 158);
`;


export const TextArea = styled.h3`
color: white;
font-weight: normal;
box-shadow: 0 0 10px rgb(148, 152, 158);
padding: 20px;
border-radius: 20px;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
  font-size: 12px;
};
`;

export const ButtonLinkContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;







