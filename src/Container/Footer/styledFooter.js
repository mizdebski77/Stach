import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.footer`
width: 100%;
min-height: 100px;
bottom: 0;
color: white;
border-top: 1px solid white;
background: #4E5156;
display: grid;
align-items: center;

`;

export const Container = styled.div`
padding: 20px;
margin: 0 100px 0 100px;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: grid;
    margin: 10px;
    justify-content: center;
    align-items: center;
  };
`;


export const Copyright = styled.h2`
font-weight: normal;
font-size: 20px;
margin: 0;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 12px;
  };
`;

export const Logo = styled.h2`
font-weight: normal;
font-size: 30px;
margin: 10px;
justify-content: center;
display: flex;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 15px;
  };
`;

