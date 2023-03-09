import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const Wrapper = styled.nav`
margin: 0 ;
width: 100%;
height: 80px;
display: flex;
background: white;
justify-content: space-between;
align-items: center;
padding: 20px 100px 20px 100px;
position: fixed;
z-index: 980;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    padding:20px;
  };


${({ scrolled }) => scrolled && css`
    border-bottom:2px solid black;
    `};
`;

export const Logo = styled.div`
font-size: 50px;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 30px;
  };
`;

export const LinksContainer = styled.li`
display: grid;
grid-template-columns: repeat(4, auto);
grid-gap: 60px;
align-items: center;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  };


`;

const activeClassName = "active";

export const Links = styled(NavLink)`
color: black;
margin: auto;
text-decoration: none;
transition: .5s;
padding: 10px;

&:hover {
    transform: translateY(-7px);
}
&.${activeClassName} {
    transition: 1s;
    font-weight: bold;
    border-bottom: 1px solid black;
}
`;


export const PhoneNavbar = styled.div`
    cursor: pointer;
@media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
}`;

export const PhoneContainer = styled.div`
background: rgba(255, 255, 255, 0.95);
position: fixed;
margin-top: 66px;
padding: 20px;
width: 100%;
display: grid;
z-index: 980;
`;